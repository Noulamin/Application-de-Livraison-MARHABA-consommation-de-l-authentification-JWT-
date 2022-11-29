FROM node:16.18.0

WORKDIR /back-end

COPY package.json /back-end

RUN npm install

COPY . .

ENV PORT=2002
ENV DATABASE=mongodb+srv://Noulamin:Noulamin@cluster0.x8mlthl.mongodb.net/Marhaba
ENV JWT_SECRET=hufkejfnrlgyvgslkcmfesovnwiuviw
ENV EMAIL=nouamanlamkadm@gmail.com
ENV PASSWORDEMAIL=byskswlqirmsfxcu
ENV HOSTNAME=localhost:2002

EXPOSE 2002

CMD ["npm","start"]
