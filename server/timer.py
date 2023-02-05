from datetime import datetime

from sanic.response import json


def get_time(request):
    now = datetime.now()
    return json({'current_time': now.strftime("%Y/%m/%d, %H:%M:%S")}, status=200)
