FROM prateekkumawat/sshimage:debian-bookwarm

# add python packages in os 
RUN apt-get update && \
    apt install -y python 

# create app directory
RUN mkdir -p /home/sshuser/app
WORKDIR /home/sshuser/app

COPY requirements.txt .
COPY src/ .

RUN pip install -r requirements.txt

CMD ["python", "app.py"]

EXPOSE 5000

