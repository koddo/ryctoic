FROM jenkins

USER root



RUN groupadd docker --gid 120 && gpasswd -a jenkins docker

# ^-- don't put this after installation of docker.io, gid would be different

# we want to have the same docker group id in the host and in the jenkins container
# because at the moment of writing we can't manage permissions of volumes
# https://docs.docker.com/installation/debian/#giving-non-root-access

# $ getent group docker | cut -d: -f3
# 120



RUN apt-get update && apt-get install -y \
            docker.io \
            && \
    apt-get -y autoclean && apt-get -y autoremove



USER jenkins
    
