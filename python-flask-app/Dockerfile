FROM python:3.11-slim

# create app directory
RUN mkdir -p /app
WORKDIR /app

COPY requirements.txt /app/
COPY src/ /app/

RUN pip install -r requirements.txt

CMD ["python", "app.py"]

EXPOSE 5000

