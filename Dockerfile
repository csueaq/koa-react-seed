FROM library/node
EXPOSE 3000
ADD . /usr/local/app
WORKDIR /usr/local/app
RUN npm install
CMD ["npm","start"]
