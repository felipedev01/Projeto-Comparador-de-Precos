import { View, Text, TouchableOpacity, headerStyle, TextInput, LogBox,ScrollView,Modal,StyleSheet,TouchableHighlight, Alert,ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from "expo-constants";
import React, { useState, useEffect, Children } from 'react';
import { Value } from 'react-native-reanimated';
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';
import { useRef } from 'react/cjs/react.production.min';
import {database} from './Curso criação Apps/App Comparador de Preços/firebase'


function HomeScreen({ navigation }) {
  useEffect(()=>{

    database.collection('Produtos').onSnapshot((query)=>{
  
    const list=[]
    query.forEach((doc)=>{

     list.push(doc.data())


    })
    
    console.log('Lista Firebase')
    console.log(list)
    
    })


 
 

  },[])
  
  return (
    <View style={{ /*marginTop: Constants.statusBarHeight,*/ flex: 1 }}>
      <View style={{ /*backgroundColor: '#fff159',*/backgroundColor:'#FFDD00', height: '10%', alignItems: 'center', justifyContent: 'center', paddingTop:14}}><Text style={{ color: 'black', fontSize: 30, fontWeight: 'bold',fontStyle:'italic' }}>Comparador de Preços</Text></View>
      <View style={{ backgroundColor: '#FFDD00', paddingHorizontal: '5%', paddingTop: 15 }}><Text style={{color: 'black', fontSize: 25, textAlign: 'center',fontWeight:'100' }}>Crie sua lista e compare preços entre supermercados da sua cidade, compre pelo melhor preço</Text></View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFDD00' }}>

        <TouchableOpacity style={{ backgroundColor: '#4285F4', width: '80%', height: '12%', alignItems: 'center', justifyContent: 'center', borderRadius: 20, position: 'relative', bottom: '20%' }} onPress={() => navigation.navigate('Details')}><Text style={{ color: 'white', fontSize: 25,fontWeight:'bold' }}>criar lista</Text></TouchableOpacity>
      </View>
    </View>
  );
} function DetailsScreen({ navigation }) {

 

  const [datasource] = useState([{
    prod:'Arroz Integral Tio João Embalagem 1kg',
    preco:735,
    preco2:625,
    precoUniao:525,
    precoAvenida:680
  },
  {
   prod:'Leite Uht Italac Integral 1l',
   preco:400,
   preco2:425,
    precoUniao:510,
    precoAvenida:490
  },
  {
    prod:'Farinha de Trigo Rosa Branca Pacote 1kg',
    preco:430,
    preco2:410,
    precoUniao:380,
    precoAvenida:470
  },
  {
    prod:'Margarina Qualy com Sal 500gr',
    preco:729,
    preco2:810,
    precoUniao:910,
    precoAvenida:865
  },
  {
    prod:'Açúcar Refinado União 1kg',
    preco:369,
    preco2:410,
    precoUniao:600,
    precoAvenida:550
  },
  {
    prod:'Feijão Carioca Tipo 1 Kicaldo Pacote 1kg',
    preco:1889,
    preco2:1769,
    precoUniao:2010,
    precoAvenida:1915
  },
  
  {
    prod:'Feijão Carioca Tipo 1 Camil Pacote 1kg',
    preco:689,
    preco2:750,
    precoUniao:550,
    precoAvenida:899
  },
  
  {
    prod:'Macarrão Espaguete Divella 08 Pacote 500g',
    preco:809,
    preco2:860,
    precoUniao:890,
    precoAvenida:980
  },
  
  {
    prod:'Sal Refinado Cisne Pacote 1kg',
    preco:235,
    preco2:410,
    precoUniao:195,
    precoAvenida:220
  },
  
  {
    prod:'Óleo de Soja Liza 900ml',
    preco:769,
    preco2:790,
    precoUniao:810,
    precoAvenida:550
  },
    {
      prod:'Molho de Tomate Quero Tradicional 340g.',preco:169,preco2:150, precoUniao:200,precoAvenida:300
    },
    {
      prod:'Pão Francês Premium Kg',preco:73,preco2:60, precoUniao:50,precoAvenida:90
    },
    {
      prod:'Salsicha Seara Hot Dog 500g',preco:1099,preco2:999, precoUniao:810,precoAvenida:1400
    },
    {
      prod:'Linguiça Sadia Calabresa Pacote 500g',preco:1699,preco2:1540, precoUniao:2125,precoAvenida:1998
    },
    {
      prod:'Filé do Peito Frango Seara Iqf 1kg',preco:1979,preco2:1800, precoUniao:2060,precoAvenida:1877
    },
    {
      prod:'Sobrecoxa Temperada Seara Assa Fácil Ervas Finas Pacote 800g',preco:1359,preco2:1423, precoUniao:1247,precoAvenida:1310
    },
    {
      prod:'Batata para Assar e Cozinhar Qualitá 1,5 Kg',preco:959,preco2:1100, precoUniao:750,precoAvenida:710
    },
    {
      prod:'Ovo Branco Médio Pvc com 20 Unidades',preco:1299,preco2:1100, precoUniao:1356,precoAvenida:1250
    },
    {
      prod:'Ovo Vermelho Naturovos Caipira 20un',preco:1699,preco2:1960, precoUniao:1523,precoAvenida:1680
    },
    {
      prod:'Farinha de Milho Amarela Yoki 500g',preco:459,preco2:396, precoUniao:511,precoAvenida:412
    },
    {
      prod:'Lava Roupas em Pó Tixan Ypê Maciez Leve 2kg Pague 1,9kg',preco:1329,preco2:1500, precoUniao:1150,precoAvenida:1287
    },
    {
      prod:'Amaciante Mon Bijou Pureza 2 Litros',preco:689,preco2:814, precoUniao:915,precoAvenida:489
    },
    {
      prod:'Detergente Ypê Capim Limão 500ml',preco:199,preco2:230, precoUniao:265,precoAvenida:310
    },
    {
      prod:'Sabonete Nivea Lavanda Embalagem 85g',preco:165,preco2:198, precoUniao:140,precoAvenida:205
    },
    {
      prod:'Creme Dental Colgate Tripla Ação Menta Original 90g',preco:319,preco2:298, precoUniao:400,precoAvenida:360
    },
    {
      prod:'Cerveja Brahma 269ml',preco:226,preco2:280, precoUniao:190,precoAvenida:340
    },
    {
      prod:'Refrigerante Pepsi Cola 1,5l',preco:399,preco2:440, precoUniao:330,precoAvenida:550
    },
    {
      prod:'Mortadela Italla Seara 5kg',preco:1099,preco2:999, precoUniao:1250,precoAvenida:1463
    },
    {
      prod:'Café 3 Corações Rituais Florada Embalagem 250g',preco:1929,preco2:1677, precoUniao:2250,precoAvenida:1478
    },


])
  const [searching, setsearching] = useState(false)
  const[produtoselecionado,setarprodutoselecionado]=useState(false)
  const[quantidadeselecionada,setarquantidadeselecionada]=useState(false)
  const [filtered, setfiltered] = useState([{datasource}])
  const [produto, setarproduto] = useState('')
  const [price, setprice]=useState(0)
  const [price2, setprice2]=useState(0)
  const [price3, setprice3]=useState(0)
  const [price4, setprice4]=useState(0)
  const [corcursor, setarcorcursor] = useState('')
  const [tela, setartela] = useState('tela2')
  const [qproduto, setarqproduto] = useState(1)
  const [supermercado, setarsupermercado] = useState('')
  const[supermercado2,setarsupermercado2]= useState('')
  const [avenida, setaravenida]=useState(false)
  const[kurihara,setarkurihara]=useState(false)
  const [tetra, setartetra]=useState(false)
  const [uniao, setaruniao]=useState(false)
  const[tetra1,setartetra1]=useState(false)
  const [uniao1, setaruniao1]=useState(false)
  const[avenida1,setaravenida1]=useState(false)
  const[kurihara1,setarkurihara1]=useState(false)
  const[produtoatual,setarprodutoatual]=useState('')
  const [foco,setarfoco]=useState(true)
  const image=require('./assets/images.jpg')
  const image2=require('./assets/download.png')
   const image3=require('./assets/uniao.png')
    const image4=require('./assets/avenida.png')
  const [total,setartotal]=useState('')
  const [total2,setartotal2]=useState('')
  const [total3,setartotal3]=useState('')
  const [total4,setartotal4]=useState('')
  const[totalfinal,setartotalfinal]=useState('')
  const[produtolista, setarprodutolista]=useState([
    

  ])
 
  const[produtolista2, setarprodutolista2]=useState([
    

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
      console.log(list2)
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
 const escolherproduto= async (val,val2,val3,val4,val5)=> {
   
    
   
   
   
   
    setarcorcursor('transparent')
   
    setsearching(false)
 
    setarproduto(val)
    
    
     
     
      setprice(val2)
      setprice2(val3)
      setprice3(val4)
      setprice4(val5)
      console.log('Preco União')
      console.log(val5)
      setarprodutoselecionado(true)
  }
  function deletarTarefa(id) {
    let newtarefas=produtolista.filter(function(val){

      return( val.id!=id)
    })
    setarprodutolista(newtarefas)
    var tot=0
    var tot2=0
    var tot3=0
    var tot4=0
     
    //console.log(produtolista)
    if(newtarefas.length>0){
      for(var i=1;i<=newtarefas.length;i++){
    
        
    
          tot=tot+newtarefas[newtarefas.length-i].preco
          tot2=tot2+newtarefas[newtarefas.length-i].preco2
          tot3=tot3+produtolista[newtarefas.length-i].preco3
          tot4=tot4+produtolista[newtarefas.length-i].preco4
    
        }
       }else{
        
    
        
    
          tot=''
          tot2=''
          tot3=''
          tot4=''
        
       }
      
       var b=tot/100
       var b2=b.toString().replace('.',',')
     
     console.log("teste"+b2)

     var c=tot2/100
       var c2=c.toString().replace('.',',')
     
     console.log("teste"+c2)

     var d=tot3/100
       var d2=d.toString().replace('.',',')
     
     console.log("teste"+d2)

     var e=tot4/100
       var e2=e.toString().replace('.',',')
     
     console.log("teste"+e2)
      
     setartotal(b2)
     setartotal2(c2)
     setartotal3(d2)
     setartotal4(e2)
     if(supermercado=='Tetra'){
      setartotalfinal(c2)
      
     }else if(supermercado=='Kurihara'){
      setartotalfinal(b2)
       
     }else if(supermercado=='Avenida'){
       setartotalfinal(d2)
     }else{
       setartotalfinal(e2)
     }
     let newtarefas2=produtolista2.filter(function(val){

      return( val.id!=id)
    })
    setarprodutolista2(newtarefas2)
  }
  console.log(supermercado)

 function inserirprodutos(){
  setartela('tela3')
  setarproduto('')
  setarcorcursor('')  
    setarprodutoselecionado(false)
  }function selecionarproduto(){
    
    let quant=qproduto

    if(produtolista.length>0){
  
      var id=produtolista[produtolista.length-1].id+1
      
  
    }else{
         var id=1
        // var s=produtolista[produtolista.length-1].preco
    }
    
    
    
     var subtotal=(price*quant)
     var subtotal2=(price2*quant)
     var subtotal3=(price3*quant)
      var subtotal4=(price4*quant)

     var su=subtotal/100
     var sub=su.toString()
     var sub0=sub.replace('.',',')
 
     var su2=subtotal2/100
     var sub2=su2.toString()
     var sub02=sub2.replace('.',',')

     var su3=subtotal3/100
     var sub3=su3.toString()
     var sub03=sub3.replace('.',',')

     var su4=subtotal4/100
     var sub4=su4.toString()
     var sub04=sub4.replace('.',',')

     
     console.log('teste13'+' '+sub0)
     let produtoatual2={id:id,product:produto,preco:sub0,preco2:sub02,preco3:sub03,preco4:sub04,quantidade:qproduto}
     
   let produtoatual={id:id,product:produto,preco:subtotal,preco2:subtotal2,preco3:subtotal3,preco4:subtotal4,quantidade:qproduto}
   
   
   setarprodutolista2([...produtolista2,produtoatual2])
   setarprodutolista([...produtolista,produtoatual])
   setarprodutoatual(produto)
   setarquantidadeselecionada(true)
   setartela('tela3.1')
  }
  
  function addproduto(){
    
    var tot=0
    var tot2=0
    var tot3=0
    var tot4=0
     
    //console.log(produtolista)
    if(produtolista.length>0){
      for(var i=1;i<=produtolista.length;i++){
    
        
    
          tot=tot+produtolista[produtolista.length-i].preco
          tot2=tot2+produtolista[produtolista.length-i].preco2
          tot3=tot3+produtolista[produtolista.length-i].preco3
          tot4=tot4+produtolista[produtolista.length-i].preco4
          
        }
       }else{
           
           tot=subtotal.toFixed(2)
           tot2=subtotal2.toFixed(2)
           tot3=subtotal3.toFixed(2)
           tot4=subtotal4.toFixed(2)
        
       }
        var b=tot/100
       var b2=b.toString().replace('.',',')
     
     console.log("teste"+b2)

     var c=tot2/100
       var c2=c.toString().replace('.',',')
     
     console.log("teste"+c2)

     var d=tot3/100
       var d2=d.toString().replace('.',',')
     
     console.log("teste"+d2)

     var e=tot4/100
       var e2=e.toString().replace('.',',')
     
     console.log("teste"+e2)
      
     setartotal(b2)
     setartotal2(c2)
     setartotal3(d2)
     setartotal4(e2)
     

     if(supermercado=='Tetra'){
      setartotalfinal(c2)
      
     }else if(supermercado=='Kurihara'){
      setartotalfinal(b2)
       
     }else if(supermercado=='Avenida'){
             setartotalfinal(d2)

     }else{
          setartotalfinal(e2)
     }
     
     setartela('tela4') 
  }
  function hello(itemValue){
    setarqproduto(itemValue)
  
  }function z(){
    setarfoco(true)
    setarcorcursor('black')
    setarproduto(produto+' ')
    setTimeout(() => {
      setarproduto(produto)
    }, 0.00001);
    setarprodutoselecionado(false)
  } var numeros=[]

  for(var i=1;i<=100;i++){

    numeros.push(i)
  }function escolhersupermercado(val){

    setarsupermercado(val)

    if(val=='Kurihara'){
      
         
     
     
      setarkurihara(true)
     
        setarkurihara1(true)
        setaravenida1(false)
      
      
    }else if(val=='Tetra'){
      setartetra(true)
      setartetra1(true)
      setarkurihara1(false)
      setaravenida1(false)
      setaruniao1(false)
      
    }else if(val=='Avenida'){
      setaravenida(true)
      setaravenida1(true)
      setaruniao1(false)
      setarkurihara1(false)
      setartetra1(false)
      
      setartetra1(false)
    }else if(val=='Uniao'){
      setaruniao(true)
      setaruniao1(true)
      setarkurihara1(false)
      setaravenida1(false)
      setartetra1(false)
    }
  
  }function escolhersupermercado2(val){

    setarsupermercado2(val)
    if(val=='Kurihara'){
     
      setarkurihara(true)
    }else if(val=='Tetra'&& supermercado=='Avenida'){
      setarkurihara(false)
      setaravenida(true)
      setartetra(true)
      alert('funcionando')
    }else if(supermercado=='Uniao'&& val=='Tetra'){

      setarkurihara(false)
      setartetra(true)
    }
    else if(val=='Tetra'){
      setartetra(true)
     
     
    }else if(val=='Avenida'&&supermercado=='Tetra'){

      

        setarkurihara(false)
        setartetra(true)
        setaravenida(true)
        alert('funcionando')
      }else if(supermercado=='Avenida'&& val=='Uniao'){

        setarkurihara(false)
        setaruniao(true)
      }else if(supermercado=='Uniao'&& val=='Avenida'){

        setarkurihara(false)
        setaravenida(true)
      }else if(supermercado=='Kurihara'&& val=='Uniao'){
        setaruniao(true)
      }
      
      else if(val=='Avenida'){
        setaravenida(true)
      
      
     
    }else if(val=='Uniao'&& supermercado=='Tetra'){
      setaruniao(true)
      setarkurihara(false)
     
    }else if(supermercado=='Tetra'&&val=='Avenida'){

      setarkurihara(false)
      alert('Kurihara False')
    }
  }function Prosseguir(){
    setartela('tela2.1')
    
    if(supermercado==''){

      setarkurihara1(true)
      setarkurihara(true)
      setarsupermercado('Kurihara')
     // alert('Supermercado vazio')
    }
  }function Prosseguir2(){
    setartela('tela3')
    if(supermercado2==''&& supermercado=='Kurihara'){
      setartetra(true)
      setarsupermercado2("Tetra")
      //alert('Supermercado 2 vazio')

    }else if(supermercado=='Tetra'&& supermercado2==''){
    setarkurihara(true)
      setarsupermercado2("Kurihara")
    }
    else if(supermercado=='Avenida'&& supermercado2==''){
      setarkurihara(true)
        setarsupermercado2("Kurihara")
      }
      else if(supermercado=='Uniao'&& supermercado2==''){
        setarkurihara(true)
          setarsupermercado2("Kurihara")
        }
  }
  function refresh(){
    navigation.navigate('Home')
    setarsupermercado('')
    setarsupermercado2('')
  }
  if(tela=='tela2'){

    return(
      <View style={{/* marginTop: Constants.statusBarHeight,*/paddingTop:14,flex: 1, backgroundColor: '#fff159', }}>
     <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 10, height: 40,  borderTopColor: 'gray', borderTopWidth: 1,width:'100%' }}>
          <Text style={{ fontSize: 22, color: 'gray', width: '90%', paddingLeft: 28, paddingTop: 5 }}>Selecione um Supermercado</Text>
        

        </View>
        <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 40,  borderBottomColor: 'gray', borderBottomWidth: 1,width:'100%',paddingLeft:80 }}>
          <Picker 
           style={{ paddingLeft: 80, height: '100%',width:'100%' }}
           
            selectedValue={(supermercado)}
            onValueChange={ (itemValue, itemIndex) =>
             escolhersupermercado(itemValue)
              
              
            }>
             
            
            <Picker.Item label="Supermercados Kurihara" value="Kurihara" />
            <Picker.Item label="Tetra Supermercados" value="Tetra" />
            <Picker.Item label="Supermercados Avenida" value="Avenida" />
            <Picker.Item label="Supermercados União" value="Uniao" />
          </Picker>

        </View>
        <TouchableOpacity style={{backgroundColor:'#4285F4',
         height:40,width:'35%',marginHorizontal:'32.5%',marginTop:20,
      }}onPress={()=>Prosseguir()}><Text style={{color:'white',paddingLeft:10,paddingTop:5,fontSize:22}}>Prosseguir</Text></TouchableOpacity>
      
    </View>

    )
  
 
   
  }
  if(tela=='tela2.1'){

    return(
      <View style={{ paddingTop:14,flex: 1, backgroundColor: '#fff159' }}>
     <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 10, height: 60,  borderTopColor: 'gray', borderTopWidth: 1,width:'100%' }}>
          <Text style={{ fontSize: 22, color: 'gray', width: '90%', paddingLeft: 28, paddingTop: 5,textAlign:'center' }}>Selecione um supermercado concorrente para comparar</Text>
        

        </View>
      
        {
           tetra1 && 
           <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 40,  borderBottomColor: 'gray', borderBottomWidth: 1,width:'100%',paddingLeft:80 }}>
          <Picker 
           style={{ paddingLeft: 80, height: '100%',width:'100%' }}
            selectedValue={(supermercado2)}
            onValueChange={ (itemValue, itemIndex) =>
             escolhersupermercado2(itemValue)
            
              
            }>
             
             
            
            <Picker.Item label="Supermercados Kurihara" value="Kurihara" />
            
            <Picker.Item label="Supermercados Avenida" value="Avenida" />
            <Picker.Item label="Supermercados União" value="Uniao" />
          </Picker>

        </View>
         }
         
         {
           uniao1 &&
           <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 40,  borderBottomColor: 'gray', borderBottomWidth: 1,width:'100%',paddingLeft:80 }}>
           <Picker 
            style={{ paddingLeft: 80, height: '100%',width:'100%' }}
             selectedValue={(supermercado2)}
             onValueChange={ (itemValue, itemIndex) =>
              escolhersupermercado2(itemValue)
             
               
             }>
              
              
             <Picker.Item label="Supermercados Kurihara" value="Kurihara" />
             <Picker.Item label="Tetra Supermercados" value="Tetra" />
             <Picker.Item label="Supermercados Avenida" value="Avenida" />
             
           </Picker>
 
         </View>
         }
         {
           avenida1 &&
           <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 40,  borderBottomColor: 'gray', borderBottomWidth: 1,width:'100%',paddingLeft:80 }}>
           <Picker 
            style={{ paddingLeft: 80, height: '100%',width:'100%' }}
             selectedValue={(supermercado2)}
             onValueChange={ (itemValue, itemIndex) =>
              escolhersupermercado2(itemValue)
             
               
             }>
              
              <Picker.Item label="Supermercados Kurihara" value="Kurihara" />
            <Picker.Item label="Tetra Supermercados" value="Tetra" />
            
            <Picker.Item label="Supermercados União" value="Uniao" />
            
             
           </Picker>
 
         </View>
         }{
           kurihara1 &&
           <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 40,  borderBottomColor: 'gray', borderBottomWidth: 1,width:'100%',paddingLeft:80 }}>
          <Picker 
           style={{ paddingLeft: 80, height: '100%',width:'100%' }}
           
            selectedValue={(supermercado2)}
            onValueChange={ (itemValue, itemIndex) =>
             escolhersupermercado2(itemValue)
            
              
            }>
             
            
            
            <Picker.Item label="Tetra Supermercados" value="Tetra" />
            <Picker.Item label="Supermercados Avenida" value="Avenida" />
            <Picker.Item label="Supermercados União" value="Uniao" />
          </Picker>

        </View>
         }
          
        
        <TouchableOpacity style={{backgroundColor:'#4285F4',
         height:40,width:'35%',marginHorizontal:'32.5%',marginTop:20,
      }}onPress={()=>Prosseguir2()}><Text style={{color:'white',paddingLeft:10,paddingTop:5,fontSize:22}}>Prosseguir</Text></TouchableOpacity>
      
    </View>

    )
  
 
   
  }
  
  if(tela=='tela3'){

    return(
      <View style={{paddingTop:14, flex: 1, backgroundColor: '#fff159', }}>
   
         
            
            <View >
             
             
              <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', fontStyle: 'italic', fontSize: 18, padding: 2, paddingBottom: 3, marginLeft:10, marginTop: 10, borderRadius: 25, paddingLeft: 10,width:'95%',}}
          
          
    
         autoFocus={true}
          onChangeText={set}
        
          placeholder={'Procure no' +' '+ supermercado}
          placeholderTextColor='g#2852A1'
          value={produto}
         selectionColor={corcursor}
        />
        <TouchableOpacity style={{height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'transparent', fontStyle: 'italic', fontSize: 21, padding: 2, paddingBottom: 3, marginLeft:10, marginTop: 10, borderRadius: 25, paddingLeft: 10,width:'95%',position:'relative',bottom:50}} onPress={()=>z()}></TouchableOpacity>
        
        </View>
            
          
         

        {

          searching &&
          
          filtered.map(function (val) {
            return (
              <View style={{position:'relative',top:-50}}>
                
                <TouchableOpacity onPress={() => escolherproduto(val.prod,val.preco,val.preco2,val.precoAvenida,val.precoUniao)} style={{ height: 'auto', borderColor: 'gray', borderWidth: 1, backgroundColor: 'white', fontStyle: 'italic', fontSize: 22, padding: 10, paddingBottom: 3, marginHorizontal: 10, marginTop: 1, borderRadius: 25, paddingLeft: 20, flexDirection: 'row',paddingRight:10 }} ><Text style={{ backgroundColor: 'white', width: '75%' }}>{val.prod} </Text><Text style={{ color: 'green',fontWeight:'bold' }}>Selecionar</Text></TouchableOpacity>
               

                </View>
            )

          })
          
        }
        

        {
          produtoselecionado &&
          
        <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 10, marginHorizontal: 40, height: 40, borderRadius: 50, borderColor: 'gray', borderWidth: 1,position:'relative',top:-50 }}>
          <Text style={{ fontSize: 22, color: 'gray', width: '50%', textAlign:'center', paddingTop: 4,paddingLeft:10,position:'relative',left:30}}>Quantidade</Text>
          <Picker style={{ width: '30%', height: '100%',position:'relative',left:30 }}
            selectedValue={qproduto}
            onValueChange={(itemValue, itemIndex) =>
             
              hello(itemValue)
            }>
              {
              numeros.map(function(val){

               return(
                <Picker.Item label={val.toString()} value={val.toString()}/>
               )


              })
           
            }
          </Picker>

        </View>}
        
        {
           produtoselecionado &&
        <View>
         
        <TouchableOpacity style={{backgroundColor:'white',
         height:40,width:'40%',marginHorizontal:'30%',marginTop:15,marginBottom:15
         ,backgroundColor:'#4285F4',textAlign:'center'}} onPress={()=>selecionarproduto()}><Text style={{color:'white',fontSize:22,textAlign:'center',paddingTop:5}} >Selecionar</Text></TouchableOpacity>
         </View>
  }
 
    
         
    </View>

    )
  
    }
    if(tela=='tela3.1'){

      return(
        <View style={{ paddingTop:25, flex: 1, backgroundColor: '#fff159', }}>
     
           
              
              
       <View>
         
          
           <View style={{borderTopColor:'black',borderBottomColor:'',borderStyle:'solid',borderWidth:3,borderLeftColor:'white',borderRightColor:'white',marginHorizontal:-3}}><Text style={{fontSize:22,paddingLeft:10,height: 'auto',width:'100%',textAlign:'center'}}>{qproduto+' '+produtoatual}</Text></View>
          <TouchableOpacity style={{backgroundColor:'#4285F4',
           height:40,width:'60%',marginHorizontal:'20%',marginTop:15,marginBottom:5,
        }} onPress={()=>addproduto()}><Text style={{color:'white',fontSize:22,paddingHorizontal:5,textAlign:'center',paddingTop:4,fontWeight:'bold'}} >adicionar a lista</Text></TouchableOpacity>
     
      
     </View>
      
      
           
      </View>
  
      )
    
      }
   
  
 
  if(tela=='tela4'){
    return(

      
      <ScrollView style={{flex: 1, backgroundColor: '#fff159',height:100,
      width:"100%",paddingTop:20
      }}>
       
        
       <View>
       <TouchableOpacity style={{backgroundColor:'#4285F4',width:'70%',marginHorizontal:'15%',marginVertical:5}}><Text style={{color:'white',fontSize:22,height:40,paddingLeft:15,paddingTop:5,textAlign:'center',fontWeight:'bold'}} onPress={()=>inserirprodutos()}>Inseir Produtos</Text></TouchableOpacity>
       </View>
          
          
         <View style={{backgroundColor:'white',flex:1,marginBottom:10}}>

         {
         kurihara &&
           <View style={{backgroundColor:'white',flex:1,flexDirection:'row'}}>
       <ImageBackground source={image} style={{width:200,height:50,marginTop:5,marginBottom:5,flexDirection:'row'}}>
          
         
        

        </ImageBackground>
        <View style={{flexDirection:'row',width:'50%',textAlign:'center',justifyContent:'center'}}><Text style={{fontSize:26,
        
        textAlign:'center',paddingTop:15,fontWeight:'bold'}}>R$ {total}</Text></View>
        </View>
        }
        {
         avenida &&
           <View style={{backgroundColor:'white',flex:1,flexDirection:'row'}}>
       <ImageBackground source={image4} style={{width:200,height:50,marginTop:5,marginBottom:5,flexDirection:'row'}}>
          
         
        

        </ImageBackground>
        <View style={{flexDirection:'row',width:'50%',textAlign:'center',justifyContent:'center'}}><Text style={{fontSize:26,
        
        textAlign:'center',paddingTop:15,fontWeight:'bold'}}>R$ {total3}</Text></View>
        </View>




        }
          {
            tetra &&
           <View style={{backgroundColor:'white',flex:1,flexDirection:'row'}}>
       <ImageBackground source={image2} style={{width:200,height:70,marginTop:5,marginBottom:5,flexDirection:'row'}}>
          

        

        </ImageBackground>
        <View style={{flexDirection:'row',width:'50%',textAlign:'center',justifyContent:'center'}}><Text style={{fontSize:26,textAlign:'center',paddingTop:27,fontWeight:'bold'}}>R$ {total2}</Text></View>
        </View>
          }
          {
            uniao &&
           <View style={{backgroundColor:'white',flex:1,flexDirection:'row'}}>
       <ImageBackground source={image3} style={{width:200,height:70,marginTop:5,marginBottom:5,flexDirection:'row'}}>
          

        

        </ImageBackground>
        <View style={{flexDirection:'row',width:'50%',textAlign:'center',justifyContent:'center'}}><Text style={{fontSize:26,textAlign:'center',paddingTop:27,fontWeight:'bold'}}>R$ {total4}</Text></View>
        </View>
          }
        
        </View>


        {
          produtolista2.map(function(val){

            if(supermercado=='Tetra'){
              
            return(<View style={styles.tarefas}><Text style={styles.tarefastexto}>{val.quantidade+' '+val.product}</Text>
           <View style={{justifyContent:'center'}}><Text style={{fontSize:20}}>{'R$'+val.preco2}</Text></View> 
            <View style={{alignItems:'flex-end',flex:1,marginRight:15,marginTop:5,justifyContent:'center'}}>
              <TouchableOpacity onPress={()=>deletarTarefa(val.id)}>
              <AntDesign name="minuscircleo" size={33} color="#2852A1" />
              </TouchableOpacity>
            
            </View>
            
            
            </View>
              
              
              
              )
            }else if(supermercado=='Kurihara'){
              return(<View style={styles.tarefas}><Text style={styles.tarefastexto}>{val.quantidade+' '+val.product}</Text>
              <View style={{justifyContent:'center',paddingLeft:10}}><Text style={{fontSize:20}}>{'R$'+val.preco}</Text></View> 
               <View style={{alignItems:'flex-end',flex:1,marginRight:15,marginTop:5,justifyContent:'center'}}>
                 <TouchableOpacity onPress={()=>deletarTarefa(val.id)}>
                 <AntDesign name="minuscircleo" size={33} color="#2852A1" />
                 </TouchableOpacity>
               
               </View>
               
               
               </View>
                 
                 
                 
                 )




            }else if(supermercado=='Avenida'){

                return(<View style={styles.tarefas}><Text style={styles.tarefastexto}>{val.quantidade+' '+val.product}</Text>
              <View style={{justifyContent:'center'}}><Text style={{fontSize:20,}}>{'R$'+val.preco3}</Text></View> 
               <View style={{alignItems:'flex-end',flex:1,marginRight:15,marginTop:5,justifyContent:'center'}}>
                 <TouchableOpacity onPress={()=>deletarTarefa(val.id)}>
                 <AntDesign name="minuscircleo" size={33} color="#2852A1" />
                 </TouchableOpacity>
               
               </View>
               
               
               </View>
                 
                 
                 
                 )


            }else{
               return(<View style={styles.tarefas}><Text style={styles.tarefastexto}>{val.quantidade+' '+val.product}</Text>
              <View style={{justifyContent:'center'}}><Text style={{fontSize:20}}>{'R$'+val.preco4}</Text></View> 
               <View style={{alignItems:'flex-end',flex:1,marginRight:15,marginTop:5,justifyContent:'center'}}>
                 <TouchableOpacity onPress={()=>deletarTarefa(val.id)}>
                 <AntDesign name="minuscircleo" size={33} color="#2852A1" />
                 </TouchableOpacity>
               
               </View>
               
               
               </View>
                 
                 
                 
                 )

            }

            
          })
        }
      
        <View style={{height:150}}>
        <Text style={{fontSize:22,fontWeight:'bold',paddingLeft:5,marginBottom:-30,marginTop:10}}>Total R$ {(totalfinal)}</Text>
        <TouchableOpacity style={{backgroundColor:'#4285F4',
           height:'22%',width:'35%',marginLeft:'60%'}}><Text style={{fontSize:18,color:'white',textAlign:'center',fontWeight:'bold',paddingTop:3,}}onPress={()=>refresh()}>reiniciar</Text></TouchableOpacity>
        </View>
      </ScrollView>
     

    )
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
    borderTopWidth:1,
    borderTopColor:'black',
    flexDirection:'row',
    
    backgroundColor:'white',
     height:'auto',
     

  },
  tarefastexto:{
    fontSize:20,
    color:'#2852A1',
    width:'60%',
   paddingVertical:10,
    paddingLeft:5
   
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
