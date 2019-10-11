# ReactNinja

Instalar dependências dentro do repositório 
O arquivo script.sh já contém todos esses comandos, para instalar todos de uma vez é só rodar

```
./script.sh
```

Caso não funcione dê permissão ao script com o comando
```
chmod 777 script.sh
```

Aqui estão os comandos individuais

```
npm install --save-dev webpack@1

npm install -g webpack@1 //caso não tenha instalado globalmente 

npm install --save-dev webpack-dev-server@1

npm install -g webpack-dev-server@1 //caso não tenha instalado globalmente 

npm install --save react@15.4 react-dom@15.4

npm install --save-dev babel-core@6 babel-loader@6 babel-preset-es2015@6 babel-preset-stage-0@6

npm install --save-dev babel-preset-react@6

npm install --save-dev react-hot-loader@3.0.0-beta.2

npm install --save-dev standard standard-loader@4

npm install --save-dev webpack-validator
```

NOTA: alguns desses comandos precisarão de sudo
