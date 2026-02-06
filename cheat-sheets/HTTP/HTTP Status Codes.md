The status codes are divided into five categories:
-  1xx: Informational - Communicates transfer protocol-level information.
-  2xx: Success - Indicates that the client's request was accepted successfully.
-  3xx Redirection - Indicates that the client must be take some additional action in order to completed their request.
-  4xx Client Error - This category of error status codes points the finger at clients.
-  5xx Server Error - The server takes responsability for these error status codes.

| Level 200                          | Level 400         | Level 500                  |
| ---------------------------------- | ----------------- | -------------------------- |
| 200: OK                            | 400: Bad request  | 500: Internal Server Error |
| 201: Created                       | 401: Unauthorized | 501: Not Implemented       |
| 202: Accepted                      | 403: Forbidden    | 502: Bad Gateway           |
| 203: Non-Authoritative Information | 404: Not found    | 503: Service Unavailable   |
| 204: No content                    | 409: Conflict     | 504: Gateway Timeout       |
|                                    |                   | 599: Network Timeout       |
For more information, please visit:
[REST API Tutorial](https://restfulapi.net/http-status-codes/)