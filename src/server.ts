import app from './app';
import pool from './config/db';

const PORT = process.env.PORT || 3000;

// Función para iniciar el servidor
const startServer = async () => {
  try {
    // Probar conexión a MySQL antes de levantar el servidor
    await pool.getConnection();
    console.log('✅ Conectado a la base de datos MySQL en AWS RDS');

    // Iniciar el servidor Express
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
    process.exit(1); // Finaliza la ejecución si la base de datos no está disponible
  }
};

startServer();