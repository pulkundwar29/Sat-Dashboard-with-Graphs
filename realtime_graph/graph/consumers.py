import json
from random import randint
from asyncio import sleep
from channels.generic.websocket import AsyncWebsocketConsumer


class GraphConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        for i in range(1000):
           await self.send(json.dumps({'value': randint(-20,20), 'value2': randint(-10,30), 'value3': randint(-30,20), 'value4': randint(-15,35)}))
           await sleep(1)

