from sanic import Sanic

from server.timer import get_time

app = Sanic("DynaFormManager")

app.add_route(get_time, '/api/time')
