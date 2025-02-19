import { redirect } from "next/navigation";

/**
 * Type for a single parameter to be encoded in the URL
 */
type RedirectParam = {
  key: string;
  value: string | number | boolean;
};

/**
 * Redirects to a specified path with multiple encoded query parameters.
 * @param {string} path - The base path to redirect to.
 * @param {RedirectParam[]} params - Array of parameters to be encoded and added as query parameters.
 * @returns {never} This function doesn't return as it triggers a redirect.
 *
 * @example
 * // Simple redirect with one parameter
 * encodedRedirect("/dashboard", [
 *   { key: "success", value: "Operation completed successfully" }
 * ]);
 *
 * @example
 * // Redirect with multiple parameters
 * encodedRedirect("/users", [
 *   { key: "error", value: "User not found" },
 *   { key: "id", value: 123 },
 *   { key: "retry", value: true }
 * ]);
 */
export function encodedRedirect(path: string, params: RedirectParam[]) {
  // Build query string from parameters
  const queryString = params
    .map(
      ({ key, value }) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join("&");

  // Construct final URL
  const url = queryString ? `${path}?${queryString}` : path;

  return redirect(url);
}

/**
 * Helper function to create a redirect parameter object
 * @param {string} key - The parameter key
 * @param {string | number | boolean} value - The parameter value
 * @returns {RedirectParam} A properly formatted redirect parameter
 */
export function createRedirectParam(
  key: string,
  value: string | number | boolean,
): RedirectParam {
  return { key, value };
}

// Type guard to check if a value is a valid redirect parameter value
function isValidParamValue(value: unknown): value is string | number | boolean {
  return (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  );
}

/**
 * Helper function to create multiple redirect parameters from an object
 * @param {Record<string, unknown>} obj - Object containing key-value pairs
 * @returns {RedirectParam[]} Array of redirect parameters
 * @throws {Error} If any value is not a valid parameter value type
 */
export function createRedirectParamsFromObject(
  obj: Record<string, unknown>,
): RedirectParam[] {
  return Object.entries(obj).map(([key, value]) => {
    if (!isValidParamValue(value)) {
      throw new Error(
        `Invalid parameter value for key "${key}". Value must be string, number, or boolean.`,
      );
    }
    return createRedirectParam(key, value);
  });
}
