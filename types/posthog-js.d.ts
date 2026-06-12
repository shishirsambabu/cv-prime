declare module 'posthog-js' {
  interface PostHogInitOptions {
    api_host?: string;
    capture_pageview?: boolean;
    persistence?: 'localStorage+cookie' | 'localStorage' | 'cookie' | 'memory';
  }

  interface PostHogClient {
    init(apiKey: string, options?: PostHogInitOptions): void;
    capture(
      event: string,
      properties?: Record<string, string | number | boolean | null>
    ): void;
  }

  const posthog: PostHogClient;
  export default posthog;
}
