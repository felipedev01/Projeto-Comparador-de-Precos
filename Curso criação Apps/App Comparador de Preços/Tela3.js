import { View, Text, TouchableOpacity, headerStyle, TextInput, LogBox,ScrollView,Modal,StyleSheet,TouchableHighlight, Alert,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from "expo-constants";
import React, { useState, useEffect, Children } from 'react';
import { Value } from 'react-native-reanimated';
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';
import { useRef } from 'react/cjs/react.production.min';
import { Lato_100Thin } from '@expo-google-fonts/lato';


function HomeScreen({ navigation }) {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flex: 1 }}>
      <View style={{ backgroundColor: '#2852A1', height: '10%', alignItems: 'center', justifyContent: 'center' }}><Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>Comparador de Preços</Text></View>
      <View style={{ backgroundColor: '#fff159', paddingHorizontal: '5%', paddingTop: 15 }}><Text style={{ color: '#2852A1', fontSize: 25, fontWeight: 'bold', textAlign: 'center' }}>Crie sua lista e compare preços entre supermercados da sua cidade, compre pelo melhor preço</Text></View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff159' }}>

        <TouchableOpacity style={{ backgroundColor: '#2852A1', width: '50%', height: '15%', alignItems: 'center', justifyContent: 'center', borderRadius: 20, position: 'relative', bottom: '20%' }} onPress={() => navigation.navigate('Details')}><Text style={{ color: 'white', fontSize: 30 }}>Criar Lista</Text></TouchableOpacity>
      </View>
    </View>
  );
} function DetailsScreen({ navigation }) {

  const [datasource] = useState([{
    prod:'Arroz Integral Tio João Embalagem 1kg',
    preco:9.99
  },
  {
   prod:'Feijão',
   preco:2

  },
  {
    prod:'Farinha',
    preco:6.99
  }])
  const [searching, setsearching] = useState(false)
  const [filtered, setfiltered] = useState([{datasource}])
  const [produto, setarproduto] = useState('')
  const [price, setprice]=useState(0)
  const [corcursor, setarcorcursor] = useState('')
  const [tela, setartela] = useState('tela2')
  const [qproduto, setarqproduto] = useState(0)
  const [supermercado, setarsupermercado] = useState('')
  const [selecionado,setarselecionado]=useState(true)
  const [modal,setmodal]=useState(false)
  const image=require('./assets/images.jpg')
  const image2=require('./assets/download.png')
  ////const[totalatual,setartotalatual]=useState()
  const [total,setartotal]=useState('')
  const[produtolista, setarprodutolista]=useState([
    

  ])
  LogBox.ignoreAllLogs(true)

 


  const set = function (text) {
   
       
     
     
     
    if (text) {
      setsearching(true)
      setarproduto(text)
      const list = text//text.toLowerCase()
      //alert(list)
      const list2 = datasource.filter(function (val) {
        if (val.prod.match(list)) {
          return val
        }

      })
      
      setfiltered(list2)
    } else {
      setsearching(false)
      setfiltered(datasource)
      setarproduto(text)
    }




  }
  
  const setq = function (text) {
    if (text) {
      setarqproduto(text)
    }
  }
 const escolherproduto= async (val,val2)=> {
   
    
   
   
   
   
    setarcorcursor('transparent')
    setsearching(false)
 
    setarproduto(val)
    
    
     
     
      setprice(val2)
     
  
   
    
    
  
      
    
     
  }
  function deletarTarefa(id) {
    let newtarefas=produtolista.filter(function(val){

      return( val.id!=id)
    })
    setarprodutolista(newtarefas)
  }
 
  
 function inserirprodutos(){
  setartela('tela3')
  setarproduto('')
  setarcorcursor('')  
    
  }
  function calc(subtotal){
   
      var tot=0
     
    //console.log(produtolista)
    if(produtolista.length>0){
      for(var i=1;i<=produtolista.length;i++){
    
        
    
          tot=tot+produtolista[produtolista.length-i].preco
    
        }
       }else{
        
    
        
    
          tot=subtotal
    
        
       }
      
     
     console.log(tot)
      
     setartotal(tot)
     setartela('tela4') 
     


  }
  
  function addproduto(){
    
  
 
    let quant=qproduto

  if(produtolista.length>0){

    var id=produtolista[produtolista.length-1].id+1
    

  }else{
       var id=1
      // var s=produtolista[produtolista.length-1].preco
  }
  
  
  
   var subtotal=price*quant
   
 let produtoatual={id:id,product:produto,preco:subtotal}
 
 

 setarprodutolista([...produtolista,produtoatual])
 
 
   calc(subtotal)
  }
 

  function setartela3(){
    setartela('tela3')
    alert('')
  }
  function hello(itemValue){
    
    setarqproduto(itemValue)
  }
  
  if(tela=='tela2'){

    return(
      <View style={{ marginTop: Constants.statusBarHeight, flex: 1, backgroundColor: '#fff159', }}>
     <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 10, height: 40,  borderColor: 'gray', borderWidth: 1,width:'100%' }}>
          <Text style={{ fontSize: 22, color: 'gray', width: '90%', paddingLeft: 28, paddingTop: 5 }}>Selecione um Supermercado</Text>
        

        </View>
        <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 10, height: 40,  borderColor: 'gray', borderWidth: 1,width:'100%' }}>
          <Picker 
           style={{ paddingLeft: 80, height: '100%',width:'100%' }}
            selectedValue={(supermercado)}
            onValueChange={ (itemValue, itemIndex) =>
             setarsupermercado(itemValue)
            
              
            }>
             
            
            <Picker.Item label="Supermercados Kurihara" value="Kurihara" />
            <Picker.Item label="Tetra Supermercados" value="Tetra" />
          </Picker>

        </View>
        <TouchableOpacity style={{backgroundColor:'#2852A1',
         height:40,width:'35%',marginHorizontal:'32.5%',marginTop:20,
      }}onPress={()=>setartela3()}><Text style={{color:'white',paddingLeft:10,paddingTop:5,fontSize:22}}>Prosseguir</Text></TouchableOpacity>
      
    </View>

    )
  
 
   
  }
  
  if(tela=='tela3'){

    return(
      <View style={{ marginTop: Constants.statusBarHeight, flex: 1, backgroundColor: '#fff159', }}>
   
          <View>
            
            <View>
              <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', fontStyle: 'italic', fontSize: 12, padding: 2, paddingBottom: 3, marginLeft:10, marginTop: 10, borderRadius: 25, paddingLeft: 10,width:'95%' }}
          
          
         
         autoFocus={true}
          onChangeText={set}
          placeholder={'Procure no' +' '+ supermercado}
          placeholderTextColor='g#2852A1'
          value={produto}
         selectionColor={corcursor}
         // editable={foco}
        /></View>
            
          
         

        {

          searching &&
          
          filtered.map(function (val) {
            return (
              <View>
                
                <TouchableOpacity onPress={() => escolherproduto(val.prod,val.preco)} style={{ height: 'auto', borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', fontStyle: 'italic', fontSize: 22, padding: 10, paddingBottom: 3, marginHorizontal: 10, marginTop: 10, borderRadius: 25, paddingLeft: 20, flexDirection: 'row',paddingRight:10 }} ><Text style={{ backgroundColor: 'white', width: '75%' }}>{val.prod} </Text><Text style={{ color: '#2852A1' }}>Selecionar</Text></TouchableOpacity>
               

                </View>
            )

          })
          
        }
        
        <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 10, marginHorizontal: 60, height: 40, borderRadius: 50, borderColor: 'gray', borderWidth: 1, }}>
          <Text style={{ fontSize: 22, color: 'gray', width: '70%', paddingLeft: 15, paddingTop: 5 }}>Quantidade</Text>
          <Picker style={{ width: '30%', paddingLeft: 80, height: '100%' }}
            selectedValue={qproduto}
            onValueChange={(itemValue, itemIndex) =>
              
              hello(itemValue)
            }>
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
          </Picker>

        </View>
        <TouchableOpacity style={{backgroundColor:'white',
         height:40,width:'40%',marginHorizontal:'30%',marginTop:15,marginBottom:15
      }} onPress={()=>addproduto()}><Text style={{color:'black',paddingTop:5,fontSize:22,paddingHorizontal:5}} >Adicionar</Text></TouchableOpacity>
          </View>
        
          
    </View>

    )
  
    }
   
  
 
  if(tela=='tela4'){
    return(

      
      <ScrollView style={{ marginTop: Constants.statusBarHeight, flex: 1, backgroundColor: '#fff159',height:100,
      width:"100%",
      }}>
       
        
       <View>
       <TouchableOpacity style={{backgroundColor:'#4285F4',width:'70%'}}><Text style={{color:'white',fontSize:18,height:35,paddingLeft:15,paddingTop:5,}} onPress={()=>inserirprodutos()}>Inseir Produtos</Text></TouchableOpacity>
       </View>

         <View style={{backgroundColor:'white'}}>
       <ImageBackground source={image} style={{width:200,height:50,marginTop:5,marginBottom:5}}>
          

        

        </ImageBackground>
        <ImageBackground source={image2} style={{width:200,height:70,marginTop:5,marginBottom:5}}>
          <View style={{height:100,width:50}}>


          </View>

        </ImageBackground>

        </View>

        {
          produtolista.map(function(val){
            return(<View style={styles.tarefas}><Text style={styles.tarefastexto}>{val.product}</Text>
            <Text>{val.preco}</Text>
            <View style={{alignItems:'flex-end',flex:1,marginRight:15}}>
              <TouchableOpacity onPress={()=>deletarTarefa(val.id)}>
              <AntDesign name="minuscircleo" size={33} color="#2852A1" />
              </TouchableOpacity>
            
            </View>
            
            
            </View>
              
              
              
              )
            
          })
        }
      
        <View>
       
              
             
                     
              <Text>total {total}</Text>     

              
            
            
              

            
        </View>
      </ScrollView>
     

    )
  }else{
    return(<View></View>)
    
  }
}
const styles = StyleSheet.create({
  header: {
    height:100,
    width:"100%",
    flex:1,

    marginTop:Constants.statusBarHeight,
  },

  textheader:{
    color:'white',
    fontSize:30,
    textAlign:"center",
    marginTop:25,
    fontFamily:'Lato_900Black_Italic'
    
  },btnaddtarefa:{

      backgroundColor:'#4285F4',
      width:200,
      color:'white',
      padding:8,
      textAlign:'center',
      marginLeft:5,
      marginTop:3


  }
  
  
  
  ,tarefas:{
    
   
    width:'100%',
    borderBottomWidth:1,
    borderBottomColor:'#2852A1',
    flexDirection:'row',
    paddingBottom:10,
    backgroundColor:'white',
     height:'auto'

  },
  tarefastexto:{
    fontSize:20,
    color:'#2852A1',
    width:'85%'
  

  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '5%',
   
  },
  modalView: {
  
    
    margin: 20,
    width:'60%',
    backgroundColor: '#4285F4',
    borderRadius: 20,
    padding: 1,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

})

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen style={{ backgroundColor: 'pink' }} name="Home" component={HomeScreen} options={{
          headerShown: false,

        }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{
          headerShown: false,

        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;