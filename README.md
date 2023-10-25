## Clone de Teslo Shop - Compras

Abre la página oficial de teslo shop [Teslo-Shop](https://shop.tesla.com/)
![image](https://github.com/szuluaga-beep/Teslo-shop-clone/assets/69664305/d3c3346e-d1c7-47d5-b03c-700f87a420c1)

Para correr localmente , se necesita la base de datos

```
docker-compose up -d
```

- El -d, significa _detached_

##MongoDB URL Local:

```
MONGO_URL=mongodb://localhost:27017/teslodb
```

#Configurar las variables de entorno
Renombrar el archivo _.en.tempplate_ a _.env_
* Reconstruir los módulos de node y levantar next

``
npm install
yarn install

npm run dev
yarn dev
``