import serial
import pymongo



#conexão database
client = pymongo.MongoClient("mongodb+srv://deploy:vaidacerto@cluster0.qljl0.gcp.mongodb.net/maskdb?retryWrites=true&w=majority")
mydb = client["maskdb"]
mycol = mydb["masks"]

ser=serial.Serial("/dev/ttyS0", 9600)#habilitar comunicação serial 
mascaraid= 0
emuso=0
cont = 1
while True:
    read_serial=ser.readline().strip().decode()
    if cont == 1:
        mascaraid = read_serial #atribui o id da mascara em uma variável
        cont = 2
    elif cont == 2:
        emuso = read_serial #recebe 0 ou 1 para dizer se esta em uso ou não
        cont = 3
    if cont == 3:       
        mycol.update_one({'id':0}, {'$set':{'use': emuso}})
        cont = 1