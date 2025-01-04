require('dotenv').config();  // Charger les variables d'environnement à partir du fichier .env

module.exports = {
    app: {
        px: '+',
        token: process.env.TOKEN,  // Charger le token depuis .env
        owners: '1268356076504617037',
        funny: '1268356076504617037',
        color: '#00001',
        footer: '[+] Wazaaa',
        maxserver: '3',
        everyoneMention: false,
        hostedBy: true,
    }
}
