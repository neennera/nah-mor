// Utility functions for API calls with retry logic

interface FetchWithRetryOptions {
  maxRetries?: number;
  delay?: number;
  onRetry?: (attempt: number, error: Error) => void;
}

export async function fetchWithRetry(
  url: string,
  options: RequestInit = {},
  retryOptions: FetchWithRetryOptions = {}
): Promise<Response> {
  const {
    maxRetries = 3,
    delay = 1000,
    onRetry
  } = retryOptions;

  let lastError: Error;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await fetch(url, {
        ...options,
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
          ...options.headers
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return response;
    } catch (error) {
      lastError = error instanceof Error ? error : new Error('Unknown error');
      
      if (onRetry) {
        onRetry(attempt + 1, lastError);
      }

      // Don't wait after the last attempt
      if (attempt < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, delay * (attempt + 1)));
      }
    }
  }

  throw lastError!;
}

export async function fetchVolunteerName(): Promise<string> {
  try {
    const response = await fetchWithRetry('/api/volunteer', {}, {
      maxRetries: 3,
      onRetry: (attempt, error) => {
        console.log(`Retrying volunteer name fetch (attempt ${attempt}):`, error.message);
      }
    });
    
    const data = await response.json();
    return data.volunteerName || 'ไม่ระบุชื่อ';
  } catch (error) {
    console.error('Failed to fetch volunteer name after retries:', error);
    return 'ไม่ระบุชื่อ';
  }
}

export async function fetchVoteResults(): Promise<number[]> {
  try {
    const response = await fetchWithRetry('/api/vote', {}, {
      maxRetries: 3,
      onRetry: (attempt, error) => {
        console.log(`Retrying vote results fetch (attempt ${attempt}):`, error.message);
      }
    });
    
    const data = await response.json();
    return data.voteresult || [0, 0, 0, 0, 0, 0, 0];
  } catch (error) {
    console.error('Failed to fetch vote results after retries:', error);
    return [0, 0, 0, 0, 0, 0, 0];
  }
}

export async function fetchImage(imageKey: string): Promise<string | null> {
  try {
    const response = await fetchWithRetry(`/api/picture?key=${imageKey}`, {}, {
      maxRetries: 3,
      onRetry: (attempt, error) => {
        console.log(`Retrying image fetch for ${imageKey} (attempt ${attempt}):`, error.message);
      }
    });
    
    const data = await response.json();
    return data.image || null;
  } catch (error) {
    console.error(`Failed to fetch image ${imageKey} after retries:`, error);
    return null;
  }
}
