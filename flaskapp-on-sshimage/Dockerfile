FROM prateekkumawat/sshimage:debian-bookwarm

# add python packages in os 
RUN apt-get update && \
    apt install -y python3 python3-pip

# create app directory
RUN mkdir -p /home/sshuser/app
WORKDIR /home/sshuser/app

COPY requirements.txt .
COPY src/ .

RUN pip3 install -r requirements.txt

CMD ["python", "app.py"]

EXPOSE 5000

