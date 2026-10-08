from __future__ import annotations

from http.server import BaseHTTPRequestHandler
from .health import handler as HealthHandler
from .contact import handler as ContactHandler


class handler(BaseHTTPRequestHandler):
    def do_GET(self) -> None:
        if "contact" in self.path:
            self.send_response(405)
            self.end_headers()
            return
        HealthHandler.do_GET(self)

    def do_POST(self) -> None:
        if "contact" in self.path or "submit" in self.path:
            ContactHandler.do_POST(self)
        else:
            self.send_response(404)
            self.end_headers()

    def do_OPTIONS(self) -> None:
        ContactHandler.do_OPTIONS(self)


__all__ = ["handler"]
