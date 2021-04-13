/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:28:57.89
*/
gx.evt.autoSkip = false;
gx.define('gx0590', false, function () {
   this.ServerClass =  "gx0590" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV13pBoletoEmpresaId=gx.fn.getControlValue("vPBOLETOEMPRESAID") ;
      this.AV14pBoletoId=gx.fn.getIntegerValue("vPBOLETOID",'.') ;
   };
   this.e131lb2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141lb1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,61,62,65];
   this.GXLastCtrlId =65;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0590",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1819,53,"BOLETOEMPRESAID","Empresa","","BoletoEmpresaId","char",0,"px",10,10,"left",null,[],1819,"BoletoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1820,54,"BOLETOID","Número de Controle","","BoletoId","int",0,"px",8,8,"right",null,[],1820,"BoletoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1815,55,"BOLETOCEDENTEEMPID","Empresa Cedente","","BoletoCedenteEmpId","char",0,"px",10,10,"left",null,[],1815,"BoletoCedenteEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1816,56,"BOLETOCEDENTEBANCO","Banco","","BoletoCedenteBanco","int",0,"px",3,3,"right",null,[],1816,"BoletoCedenteBanco",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1817,57,"BOLETOCEDENTEAGENCIA","Agência","","BoletoCedenteAgencia","int",0,"px",4,4,"right",null,[],1817,"BoletoCedenteAgencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1821,58,"BOLETONUMERO","Nosso Número","","BoletoNumero","int",0,"px",18,18,"right",null,[],1821,"BoletoNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1822,59,"BOLETODIGITO","Dígito","","BoletoDigito","char",0,"px",2,2,"left",null,[],1822,"BoletoDigito",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1823,60,"BOLETOVALOR","Valor","","BoletoValor","decimal",0,"px",22,22,"right",null,[],1823,"BoletoValor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1829,61,"BOLETODATAPROCESSAMENTO","Data Processamento","","BoletoDataProcessamento","date",0,"px",10,10,"right",null,[],1829,"BoletoDataProcessamento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1839,62,"BOLETOACEITE","Aceite","","BoletoAceite","char",0,"px",1,1,"left",null,[],1839,"BoletoAceite",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKBOLETOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBOLETOEMPRESAID",gxz:"ZV6cBoletoEmpresaId",gxold:"OV6cBoletoEmpresaId",gxvar:"AV6cBoletoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cBoletoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cBoletoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCBOLETOEMPRESAID",gx.O.AV6cBoletoEmpresaId,0)},c2v:function(){gx.O.AV6cBoletoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCBOLETOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKBOLETOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBOLETOID",gxz:"ZV7cBoletoId",gxold:"OV7cBoletoId",gxvar:"AV7cBoletoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cBoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cBoletoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBOLETOID",gx.O.AV7cBoletoId,0)},c2v:function(){gx.O.AV7cBoletoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBOLETOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKBOLETOCEDENTEEMPID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBOLETOCEDENTEEMPID",gxz:"ZV8cBoletoCedenteEmpId",gxold:"OV8cBoletoCedenteEmpId",gxvar:"AV8cBoletoCedenteEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cBoletoCedenteEmpId=Value},v2z:function(Value){gx.O.ZV8cBoletoCedenteEmpId=Value},v2c:function(){gx.fn.setControlValue("vCBOLETOCEDENTEEMPID",gx.O.AV8cBoletoCedenteEmpId,0)},c2v:function(){gx.O.AV8cBoletoCedenteEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCBOLETOCEDENTEEMPID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKBOLETOCEDENTEBANCO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBOLETOCEDENTEBANCO",gxz:"ZV9cBoletoCedenteBanco",gxold:"OV9cBoletoCedenteBanco",gxvar:"AV9cBoletoCedenteBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cBoletoCedenteBanco=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cBoletoCedenteBanco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBOLETOCEDENTEBANCO",gx.O.AV9cBoletoCedenteBanco,0)},c2v:function(){gx.O.AV9cBoletoCedenteBanco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBOLETOCEDENTEBANCO",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKBOLETOCEDENTEAGENCIA", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBOLETOCEDENTEAGENCIA",gxz:"ZV10cBoletoCedenteAgencia",gxold:"OV10cBoletoCedenteAgencia",gxvar:"AV10cBoletoCedenteAgencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cBoletoCedenteAgencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cBoletoCedenteAgencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBOLETOCEDENTEAGENCIA",gx.O.AV10cBoletoCedenteAgencia,0)},c2v:function(){gx.O.AV10cBoletoCedenteAgencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBOLETOCEDENTEAGENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKBOLETONUMERO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBOLETONUMERO",gxz:"ZV11cBoletoNumero",gxold:"OV11cBoletoNumero",gxvar:"AV11cBoletoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cBoletoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cBoletoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBOLETONUMERO",gx.O.AV11cBoletoNumero,0)},c2v:function(){gx.O.AV11cBoletoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBOLETONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKBOLETODIGITO", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBOLETODIGITO",gxz:"ZV12cBoletoDigito",gxold:"OV12cBoletoDigito",gxvar:"AV12cBoletoDigito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cBoletoDigito=Value},v2z:function(Value){gx.O.ZV12cBoletoDigito=Value},v2c:function(){gx.fn.setControlValue("vCBOLETODIGITO",gx.O.AV12cBoletoDigito,0)},c2v:function(){gx.O.AV12cBoletoDigito=this.val()},val:function(){return gx.fn.getControlValue("vCBOLETODIGITO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOEMPRESAID",gxz:"Z1819BoletoEmpresaId",gxold:"O1819BoletoEmpresaId",gxvar:"A1819BoletoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1819BoletoEmpresaId=Value},v2z:function(Value){gx.O.Z1819BoletoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("BOLETOEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1819BoletoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1819BoletoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETOEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOID",gxz:"Z1820BoletoId",gxold:"O1820BoletoId",gxvar:"A1820BoletoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1820BoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1820BoletoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETOID",row || gx.fn.currentGridRowImpl(51),gx.O.A1820BoletoId,0)},c2v:function(){gx.O.A1820BoletoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BOLETOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOCEDENTEEMPID",gxz:"Z1815BoletoCedenteEmpId",gxold:"O1815BoletoCedenteEmpId",gxvar:"A1815BoletoCedenteEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1815BoletoCedenteEmpId=Value},v2z:function(Value){gx.O.Z1815BoletoCedenteEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("BOLETOCEDENTEEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A1815BoletoCedenteEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1815BoletoCedenteEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETOCEDENTEEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOCEDENTEBANCO",gxz:"Z1816BoletoCedenteBanco",gxold:"O1816BoletoCedenteBanco",gxvar:"A1816BoletoCedenteBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1816BoletoCedenteBanco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1816BoletoCedenteBanco=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETOCEDENTEBANCO",row || gx.fn.currentGridRowImpl(51),gx.O.A1816BoletoCedenteBanco,0)},c2v:function(){gx.O.A1816BoletoCedenteBanco=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BOLETOCEDENTEBANCO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOCEDENTEAGENCIA",gxz:"Z1817BoletoCedenteAgencia",gxold:"O1817BoletoCedenteAgencia",gxvar:"A1817BoletoCedenteAgencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1817BoletoCedenteAgencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1817BoletoCedenteAgencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETOCEDENTEAGENCIA",row || gx.fn.currentGridRowImpl(51),gx.O.A1817BoletoCedenteAgencia,0)},c2v:function(){gx.O.A1817BoletoCedenteAgencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BOLETOCEDENTEAGENCIA",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETONUMERO",gxz:"Z1821BoletoNumero",gxold:"O1821BoletoNumero",gxvar:"A1821BoletoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1821BoletoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1821BoletoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETONUMERO",row || gx.fn.currentGridRowImpl(51),gx.O.A1821BoletoNumero,0)},c2v:function(){gx.O.A1821BoletoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BOLETONUMERO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODIGITO",gxz:"Z1822BoletoDigito",gxold:"O1822BoletoDigito",gxvar:"A1822BoletoDigito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1822BoletoDigito=Value},v2z:function(Value){gx.O.Z1822BoletoDigito=Value},v2c:function(row){gx.fn.setGridControlValue("BOLETODIGITO",row || gx.fn.currentGridRowImpl(51),gx.O.A1822BoletoDigito,0)},c2v:function(){gx.O.A1822BoletoDigito=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETODIGITO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOVALOR",gxz:"Z1823BoletoValor",gxold:"O1823BoletoValor",gxvar:"A1823BoletoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1823BoletoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1823BoletoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("BOLETOVALOR",row || gx.fn.currentGridRowImpl(51),gx.O.A1823BoletoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1823BoletoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("BOLETOVALOR",row || gx.fn.currentGridRowImpl(51),'.',',')},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODATAPROCESSAMENTO",gxz:"Z1829BoletoDataProcessamento",gxold:"O1829BoletoDataProcessamento",gxvar:"A1829BoletoDataProcessamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1829BoletoDataProcessamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1829BoletoDataProcessamento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETODATAPROCESSAMENTO",row || gx.fn.currentGridRowImpl(51),gx.O.A1829BoletoDataProcessamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1829BoletoDataProcessamento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("BOLETODATAPROCESSAMENTO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOACEITE",gxz:"Z1839BoletoAceite",gxold:"O1839BoletoAceite",gxvar:"A1839BoletoAceite",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1839BoletoAceite=Value},v2z:function(Value){gx.O.Z1839BoletoAceite=Value},v2c:function(row){gx.fn.setGridControlValue("BOLETOACEITE",row || gx.fn.currentGridRowImpl(51),gx.O.A1839BoletoAceite,0)},c2v:function(){gx.O.A1839BoletoAceite=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETOACEITE",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TABLE4",grid:0};
   this.AV6cBoletoEmpresaId = "" ;
   this.ZV6cBoletoEmpresaId = "" ;
   this.OV6cBoletoEmpresaId = "" ;
   this.AV7cBoletoId = 0 ;
   this.ZV7cBoletoId = 0 ;
   this.OV7cBoletoId = 0 ;
   this.AV8cBoletoCedenteEmpId = "" ;
   this.ZV8cBoletoCedenteEmpId = "" ;
   this.OV8cBoletoCedenteEmpId = "" ;
   this.AV9cBoletoCedenteBanco = 0 ;
   this.ZV9cBoletoCedenteBanco = 0 ;
   this.OV9cBoletoCedenteBanco = 0 ;
   this.AV10cBoletoCedenteAgencia = 0 ;
   this.ZV10cBoletoCedenteAgencia = 0 ;
   this.OV10cBoletoCedenteAgencia = 0 ;
   this.AV11cBoletoNumero = 0 ;
   this.ZV11cBoletoNumero = 0 ;
   this.OV11cBoletoNumero = 0 ;
   this.AV12cBoletoDigito = "" ;
   this.ZV12cBoletoDigito = "" ;
   this.OV12cBoletoDigito = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1819BoletoEmpresaId = "" ;
   this.O1819BoletoEmpresaId = "" ;
   this.Z1820BoletoId = 0 ;
   this.O1820BoletoId = 0 ;
   this.Z1815BoletoCedenteEmpId = "" ;
   this.O1815BoletoCedenteEmpId = "" ;
   this.Z1816BoletoCedenteBanco = 0 ;
   this.O1816BoletoCedenteBanco = 0 ;
   this.Z1817BoletoCedenteAgencia = 0 ;
   this.O1817BoletoCedenteAgencia = 0 ;
   this.Z1821BoletoNumero = 0 ;
   this.O1821BoletoNumero = 0 ;
   this.Z1822BoletoDigito = "" ;
   this.O1822BoletoDigito = "" ;
   this.Z1823BoletoValor = 0 ;
   this.O1823BoletoValor = 0 ;
   this.Z1829BoletoDataProcessamento = gx.date.nullDate() ;
   this.O1829BoletoDataProcessamento = gx.date.nullDate() ;
   this.Z1839BoletoAceite = "" ;
   this.O1839BoletoAceite = "" ;
   this.AV6cBoletoEmpresaId = "" ;
   this.AV7cBoletoId = 0 ;
   this.AV8cBoletoCedenteEmpId = "" ;
   this.AV9cBoletoCedenteBanco = 0 ;
   this.AV10cBoletoCedenteAgencia = 0 ;
   this.AV11cBoletoNumero = 0 ;
   this.AV12cBoletoDigito = "" ;
   this.AV13pBoletoEmpresaId = "" ;
   this.AV14pBoletoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A1819BoletoEmpresaId = "" ;
   this.A1820BoletoId = 0 ;
   this.A1815BoletoCedenteEmpId = "" ;
   this.A1816BoletoCedenteBanco = 0 ;
   this.A1817BoletoCedenteAgencia = 0 ;
   this.A1821BoletoNumero = 0 ;
   this.A1822BoletoDigito = "" ;
   this.A1823BoletoValor = 0 ;
   this.A1829BoletoDataProcessamento = gx.date.nullDate() ;
   this.A1839BoletoAceite = "" ;
   this.Events = {"e131lb2_client": ["ENTER", true] ,"e141lb1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBoletoEmpresaId',fld:'vCBOLETOEMPRESAID'},{av:'AV7cBoletoId',fld:'vCBOLETOID'},{av:'AV8cBoletoCedenteEmpId',fld:'vCBOLETOCEDENTEEMPID'},{av:'AV9cBoletoCedenteBanco',fld:'vCBOLETOCEDENTEBANCO'},{av:'AV10cBoletoCedenteAgencia',fld:'vCBOLETOCEDENTEAGENCIA'},{av:'AV11cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV12cBoletoDigito',fld:'vCBOLETODIGITO'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1819BoletoEmpresaId',fld:'BOLETOEMPRESAID'},{av:'A1820BoletoId',fld:'BOLETOID'}],[{av:'AV13pBoletoEmpresaId',fld:'vPBOLETOEMPRESAID'},{av:'AV14pBoletoId',fld:'vPBOLETOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBoletoEmpresaId',fld:'vCBOLETOEMPRESAID'},{av:'AV7cBoletoId',fld:'vCBOLETOID'},{av:'AV8cBoletoCedenteEmpId',fld:'vCBOLETOCEDENTEEMPID'},{av:'AV9cBoletoCedenteBanco',fld:'vCBOLETOCEDENTEBANCO'},{av:'AV10cBoletoCedenteAgencia',fld:'vCBOLETOCEDENTEAGENCIA'},{av:'AV11cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV12cBoletoDigito',fld:'vCBOLETODIGITO'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBoletoEmpresaId',fld:'vCBOLETOEMPRESAID'},{av:'AV7cBoletoId',fld:'vCBOLETOID'},{av:'AV8cBoletoCedenteEmpId',fld:'vCBOLETOCEDENTEEMPID'},{av:'AV9cBoletoCedenteBanco',fld:'vCBOLETOCEDENTEBANCO'},{av:'AV10cBoletoCedenteAgencia',fld:'vCBOLETOCEDENTEAGENCIA'},{av:'AV11cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV12cBoletoDigito',fld:'vCBOLETODIGITO'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBoletoEmpresaId',fld:'vCBOLETOEMPRESAID'},{av:'AV7cBoletoId',fld:'vCBOLETOID'},{av:'AV8cBoletoCedenteEmpId',fld:'vCBOLETOCEDENTEEMPID'},{av:'AV9cBoletoCedenteBanco',fld:'vCBOLETOCEDENTEBANCO'},{av:'AV10cBoletoCedenteAgencia',fld:'vCBOLETOCEDENTEAGENCIA'},{av:'AV11cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV12cBoletoDigito',fld:'vCBOLETODIGITO'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBoletoEmpresaId',fld:'vCBOLETOEMPRESAID'},{av:'AV7cBoletoId',fld:'vCBOLETOID'},{av:'AV8cBoletoCedenteEmpId',fld:'vCBOLETOCEDENTEEMPID'},{av:'AV9cBoletoCedenteBanco',fld:'vCBOLETOCEDENTEBANCO'},{av:'AV10cBoletoCedenteAgencia',fld:'vCBOLETOCEDENTEAGENCIA'},{av:'AV11cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV12cBoletoDigito',fld:'vCBOLETODIGITO'}],[]];
   this.setVCMap("AV13pBoletoEmpresaId", "vPBOLETOEMPRESAID", 0, "char");
   this.setVCMap("AV14pBoletoId", "vPBOLETOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0590());
