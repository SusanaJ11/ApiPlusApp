const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

//ceamos un modulo que vamos exportar para la configuracion 
module.exports = {
    //hacemos referencia al index de raiz 
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: 'bundle.js',
    },
    resolve: {
        //pasamos dos extenciones y declaracion de arreglo llamado estensiones 

        extensions: [ '.js', '.jsx' ],
    },

    //creamos reglas 

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                },
            },

            //reglas de expresion simple donde agrega a los archivos html 
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                }

            },

            {
                //se agrega la regla para que pueda leer archivos scss o css
                test:/\.(s*)css$/,
                use:[{
                    loader:MiniCssExtractPlugin.loader,
                },
                'css-loader',  //quien los va usar
                'sass-loader'
                ]
            }, //si se quiere agregar otra relgla se le agrega una "," despues de llave

            {
                //creamos reglas para el archivo file
                //cualquier elemento que se utilice con png gir jpg puede ser utilizado 
               test:/\.(png|gif|jpg)$/,
               use: [{
                'loader': 'file-loader',
                options:{
                    //como se guarda y respeta la extension
                    name:'assets/[hash].[ext]'
                }

               }] 
            }

        ] //si ya no vas agregar otra regla se le quita la coma ono se la pones 
    },

    //halladimos los plugins
    plugins: [
        new HtmlWebpackPlugin( {
            template: './public/index.html',
            filename: './index.html',
        } ),

    ],

};
