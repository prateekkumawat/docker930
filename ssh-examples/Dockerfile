FROM  ubuntu:latest

# Install OpenSSH server and client
RUN apt-get update && \
    apt-get install -y openssh-server openssh-client nginx && \
    rm -rf /var/lib/apt/lists/*
# Create the SSH directory and set permissions
RUN useradd -m sshuser && \
    mkdir -p /home/sshuser/.ssh && \
    chmod 700 /home/sshuser/.ssh && \
    chown sshuser:sshuser /home/sshuser/.ssh

# Copy the public key into the authorized_keys file
COPY --chown=sshuser:sshuser --chmod=600 authorized_keys /home/sshuser/.ssh/authorized_keys

# run SSH server on container start
CMD ["/usr/sbin/sshd", "-D"]

# workdir for the container
WORKDIR /home/sshuser

# User to run the SSH server
USER sshuser

# Expose the SSH port
EXPOSE 22