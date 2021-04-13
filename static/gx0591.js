/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:28:37.8
*/
gx.evt.autoSkip = false;
gx.define('gx0591', false, function () {
   this.ServerClass =  "gx0591" ;
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
      this.AV12pBoletoEmpresaId=gx.fn.getControlValue("vPBOLETOEMPRESAID") ;
      this.AV13pBoletoId=gx.fn.getIntegerValue("vPBOLETOID",'.') ;
   };
   this.e131l32_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141l31_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0591",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1820,48,"BOLETOID","Número de Controle","","BoletoId","int",0,"px",8,8,"right",null,[],1820,"BoletoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1815,49,"BOLETOCEDENTEEMPID","Empresa Cedente","","BoletoCedenteEmpId","char",0,"px",10,10,"left",null,[],1815,"BoletoCedenteEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1816,50,"BOLETOCEDENTEBANCO","Banco","","BoletoCedenteBanco","int",0,"px",3,3,"right",null,[],1816,"BoletoCedenteBanco",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1817,51,"BOLETOCEDENTEAGENCIA","Agência","","BoletoCedenteAgencia","int",0,"px",4,4,"right",null,[],1817,"BoletoCedenteAgencia",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1821,52,"BOLETONUMERO","Nosso Número","","BoletoNumero","int",0,"px",18,18,"right",null,[],1821,"BoletoNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1822,53,"BOLETODIGITO","Dígito","","BoletoDigito","char",0,"px",2,2,"left",null,[],1822,"BoletoDigito",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1823,54,"BOLETOVALOR","Valor","","BoletoValor","decimal",0,"px",22,22,"right",null,[],1823,"BoletoValor",true,2,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1829,55,"BOLETODATAPROCESSAMENTO","Data Processamento","","BoletoDataProcessamento","date",0,"px",10,10,"right",null,[],1829,"BoletoDataProcessamento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1830,56,"BOLETODATAEMISSAO","Data Emissão","","BoletoDataEmissao","date",0,"px",10,10,"right",null,[],1830,"BoletoDataEmissao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1819,57,"BOLETOEMPRESAID","Empresa","","BoletoEmpresaId","char",0,"px",10,10,"left",null,[],1819,"BoletoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKBOLETOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBOLETOID",gxz:"ZV6cBoletoId",gxold:"OV6cBoletoId",gxvar:"AV6cBoletoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cBoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cBoletoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBOLETOID",gx.O.AV6cBoletoId,0)},c2v:function(){gx.O.AV6cBoletoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBOLETOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKBOLETOCEDENTEEMPID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBOLETOCEDENTEEMPID",gxz:"ZV7cBoletoCedenteEmpId",gxold:"OV7cBoletoCedenteEmpId",gxvar:"AV7cBoletoCedenteEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cBoletoCedenteEmpId=Value},v2z:function(Value){gx.O.ZV7cBoletoCedenteEmpId=Value},v2c:function(){gx.fn.setControlValue("vCBOLETOCEDENTEEMPID",gx.O.AV7cBoletoCedenteEmpId,0)},c2v:function(){gx.O.AV7cBoletoCedenteEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCBOLETOCEDENTEEMPID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKBOLETOCEDENTEBANCO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBOLETOCEDENTEBANCO",gxz:"ZV8cBoletoCedenteBanco",gxold:"OV8cBoletoCedenteBanco",gxvar:"AV8cBoletoCedenteBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cBoletoCedenteBanco=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cBoletoCedenteBanco=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBOLETOCEDENTEBANCO",gx.O.AV8cBoletoCedenteBanco,0)},c2v:function(){gx.O.AV8cBoletoCedenteBanco=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBOLETOCEDENTEBANCO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKBOLETOCEDENTEAGENCIA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBOLETOCEDENTEAGENCIA",gxz:"ZV9cBoletoCedenteAgencia",gxold:"OV9cBoletoCedenteAgencia",gxvar:"AV9cBoletoCedenteAgencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cBoletoCedenteAgencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV9cBoletoCedenteAgencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBOLETOCEDENTEAGENCIA",gx.O.AV9cBoletoCedenteAgencia,0)},c2v:function(){gx.O.AV9cBoletoCedenteAgencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBOLETOCEDENTEAGENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKBOLETONUMERO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBOLETONUMERO",gxz:"ZV10cBoletoNumero",gxold:"OV10cBoletoNumero",gxvar:"AV10cBoletoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cBoletoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cBoletoNumero=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCBOLETONUMERO",gx.O.AV10cBoletoNumero,0)},c2v:function(){gx.O.AV10cBoletoNumero=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCBOLETONUMERO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKBOLETODIGITO", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCBOLETODIGITO",gxz:"ZV11cBoletoDigito",gxold:"OV11cBoletoDigito",gxvar:"AV11cBoletoDigito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cBoletoDigito=Value},v2z:function(Value){gx.O.ZV11cBoletoDigito=Value},v2c:function(){gx.fn.setControlValue("vCBOLETODIGITO",gx.O.AV11cBoletoDigito,0)},c2v:function(){gx.O.AV11cBoletoDigito=this.val()},val:function(){return gx.fn.getControlValue("vCBOLETODIGITO")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOID",gxz:"Z1820BoletoId",gxold:"O1820BoletoId",gxvar:"A1820BoletoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1820BoletoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1820BoletoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETOID",row || gx.fn.currentGridRowImpl(46),gx.O.A1820BoletoId,0)},c2v:function(){gx.O.A1820BoletoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BOLETOID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOCEDENTEEMPID",gxz:"Z1815BoletoCedenteEmpId",gxold:"O1815BoletoCedenteEmpId",gxvar:"A1815BoletoCedenteEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1815BoletoCedenteEmpId=Value},v2z:function(Value){gx.O.Z1815BoletoCedenteEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("BOLETOCEDENTEEMPID",row || gx.fn.currentGridRowImpl(46),gx.O.A1815BoletoCedenteEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1815BoletoCedenteEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETOCEDENTEEMPID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOCEDENTEBANCO",gxz:"Z1816BoletoCedenteBanco",gxold:"O1816BoletoCedenteBanco",gxvar:"A1816BoletoCedenteBanco",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1816BoletoCedenteBanco=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1816BoletoCedenteBanco=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETOCEDENTEBANCO",row || gx.fn.currentGridRowImpl(46),gx.O.A1816BoletoCedenteBanco,0)},c2v:function(){gx.O.A1816BoletoCedenteBanco=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BOLETOCEDENTEBANCO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOCEDENTEAGENCIA",gxz:"Z1817BoletoCedenteAgencia",gxold:"O1817BoletoCedenteAgencia",gxvar:"A1817BoletoCedenteAgencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1817BoletoCedenteAgencia=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1817BoletoCedenteAgencia=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETOCEDENTEAGENCIA",row || gx.fn.currentGridRowImpl(46),gx.O.A1817BoletoCedenteAgencia,0)},c2v:function(){gx.O.A1817BoletoCedenteAgencia=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BOLETOCEDENTEAGENCIA",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"int",len:18,dec:0,sign:false,pic:"ZZZZZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETONUMERO",gxz:"Z1821BoletoNumero",gxold:"O1821BoletoNumero",gxvar:"A1821BoletoNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1821BoletoNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1821BoletoNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETONUMERO",row || gx.fn.currentGridRowImpl(46),gx.O.A1821BoletoNumero,0)},c2v:function(){gx.O.A1821BoletoNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("BOLETONUMERO",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODIGITO",gxz:"Z1822BoletoDigito",gxold:"O1822BoletoDigito",gxvar:"A1822BoletoDigito",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1822BoletoDigito=Value},v2z:function(Value){gx.O.Z1822BoletoDigito=Value},v2c:function(row){gx.fn.setGridControlValue("BOLETODIGITO",row || gx.fn.currentGridRowImpl(46),gx.O.A1822BoletoDigito,0)},c2v:function(){gx.O.A1822BoletoDigito=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETODIGITO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"decimal",len:18,dec:2,sign:false,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOVALOR",gxz:"Z1823BoletoValor",gxold:"O1823BoletoValor",gxvar:"A1823BoletoValor",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1823BoletoValor=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z1823BoletoValor=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("BOLETOVALOR",row || gx.fn.currentGridRowImpl(46),gx.O.A1823BoletoValor,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1823BoletoValor=this.val()},val:function(row){return gx.fn.getGridDecimalValue("BOLETOVALOR",row || gx.fn.currentGridRowImpl(46),'.',',')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODATAPROCESSAMENTO",gxz:"Z1829BoletoDataProcessamento",gxold:"O1829BoletoDataProcessamento",gxvar:"A1829BoletoDataProcessamento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1829BoletoDataProcessamento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1829BoletoDataProcessamento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETODATAPROCESSAMENTO",row || gx.fn.currentGridRowImpl(46),gx.O.A1829BoletoDataProcessamento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1829BoletoDataProcessamento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("BOLETODATAPROCESSAMENTO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETODATAEMISSAO",gxz:"Z1830BoletoDataEmissao",gxold:"O1830BoletoDataEmissao",gxvar:"A1830BoletoDataEmissao",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1830BoletoDataEmissao=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1830BoletoDataEmissao=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("BOLETODATAEMISSAO",row || gx.fn.currentGridRowImpl(46),gx.O.A1830BoletoDataEmissao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1830BoletoDataEmissao=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("BOLETODATAEMISSAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"BOLETOEMPRESAID",gxz:"Z1819BoletoEmpresaId",gxold:"O1819BoletoEmpresaId",gxvar:"A1819BoletoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1819BoletoEmpresaId=Value},v2z:function(Value){gx.O.Z1819BoletoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("BOLETOEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A1819BoletoEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1819BoletoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("BOLETOEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cBoletoId = 0 ;
   this.ZV6cBoletoId = 0 ;
   this.OV6cBoletoId = 0 ;
   this.AV7cBoletoCedenteEmpId = "" ;
   this.ZV7cBoletoCedenteEmpId = "" ;
   this.OV7cBoletoCedenteEmpId = "" ;
   this.AV8cBoletoCedenteBanco = 0 ;
   this.ZV8cBoletoCedenteBanco = 0 ;
   this.OV8cBoletoCedenteBanco = 0 ;
   this.AV9cBoletoCedenteAgencia = 0 ;
   this.ZV9cBoletoCedenteAgencia = 0 ;
   this.OV9cBoletoCedenteAgencia = 0 ;
   this.AV10cBoletoNumero = 0 ;
   this.ZV10cBoletoNumero = 0 ;
   this.OV10cBoletoNumero = 0 ;
   this.AV11cBoletoDigito = "" ;
   this.ZV11cBoletoDigito = "" ;
   this.OV11cBoletoDigito = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
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
   this.Z1830BoletoDataEmissao = gx.date.nullDate() ;
   this.O1830BoletoDataEmissao = gx.date.nullDate() ;
   this.Z1819BoletoEmpresaId = "" ;
   this.O1819BoletoEmpresaId = "" ;
   this.AV6cBoletoId = 0 ;
   this.AV7cBoletoCedenteEmpId = "" ;
   this.AV8cBoletoCedenteBanco = 0 ;
   this.AV9cBoletoCedenteAgencia = 0 ;
   this.AV10cBoletoNumero = 0 ;
   this.AV11cBoletoDigito = "" ;
   this.AV12pBoletoEmpresaId = "" ;
   this.AV13pBoletoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A1820BoletoId = 0 ;
   this.A1815BoletoCedenteEmpId = "" ;
   this.A1816BoletoCedenteBanco = 0 ;
   this.A1817BoletoCedenteAgencia = 0 ;
   this.A1821BoletoNumero = 0 ;
   this.A1822BoletoDigito = "" ;
   this.A1823BoletoValor = 0 ;
   this.A1829BoletoDataProcessamento = gx.date.nullDate() ;
   this.A1830BoletoDataEmissao = gx.date.nullDate() ;
   this.A1819BoletoEmpresaId = "" ;
   this.Events = {"e131l32_client": ["ENTER", true] ,"e141l31_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBoletoId',fld:'vCBOLETOID'},{av:'AV7cBoletoCedenteEmpId',fld:'vCBOLETOCEDENTEEMPID'},{av:'AV8cBoletoCedenteBanco',fld:'vCBOLETOCEDENTEBANCO'},{av:'AV9cBoletoCedenteAgencia',fld:'vCBOLETOCEDENTEAGENCIA'},{av:'AV10cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV11cBoletoDigito',fld:'vCBOLETODIGITO'},{av:'AV12pBoletoEmpresaId',fld:'vPBOLETOEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1820BoletoId',fld:'BOLETOID'}],[{av:'AV13pBoletoId',fld:'vPBOLETOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBoletoId',fld:'vCBOLETOID'},{av:'AV7cBoletoCedenteEmpId',fld:'vCBOLETOCEDENTEEMPID'},{av:'AV8cBoletoCedenteBanco',fld:'vCBOLETOCEDENTEBANCO'},{av:'AV9cBoletoCedenteAgencia',fld:'vCBOLETOCEDENTEAGENCIA'},{av:'AV10cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV11cBoletoDigito',fld:'vCBOLETODIGITO'},{av:'AV12pBoletoEmpresaId',fld:'vPBOLETOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBoletoId',fld:'vCBOLETOID'},{av:'AV7cBoletoCedenteEmpId',fld:'vCBOLETOCEDENTEEMPID'},{av:'AV8cBoletoCedenteBanco',fld:'vCBOLETOCEDENTEBANCO'},{av:'AV9cBoletoCedenteAgencia',fld:'vCBOLETOCEDENTEAGENCIA'},{av:'AV10cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV11cBoletoDigito',fld:'vCBOLETODIGITO'},{av:'AV12pBoletoEmpresaId',fld:'vPBOLETOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBoletoId',fld:'vCBOLETOID'},{av:'AV7cBoletoCedenteEmpId',fld:'vCBOLETOCEDENTEEMPID'},{av:'AV8cBoletoCedenteBanco',fld:'vCBOLETOCEDENTEBANCO'},{av:'AV9cBoletoCedenteAgencia',fld:'vCBOLETOCEDENTEAGENCIA'},{av:'AV10cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV11cBoletoDigito',fld:'vCBOLETODIGITO'},{av:'AV12pBoletoEmpresaId',fld:'vPBOLETOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cBoletoId',fld:'vCBOLETOID'},{av:'AV7cBoletoCedenteEmpId',fld:'vCBOLETOCEDENTEEMPID'},{av:'AV8cBoletoCedenteBanco',fld:'vCBOLETOCEDENTEBANCO'},{av:'AV9cBoletoCedenteAgencia',fld:'vCBOLETOCEDENTEAGENCIA'},{av:'AV10cBoletoNumero',fld:'vCBOLETONUMERO'},{av:'AV11cBoletoDigito',fld:'vCBOLETODIGITO'},{av:'AV12pBoletoEmpresaId',fld:'vPBOLETOEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV12pBoletoEmpresaId", "vPBOLETOEMPRESAID", 0, "char");
   this.setVCMap("AV13pBoletoId", "vPBOLETOID", 0, "int");
   this.setVCMap("AV12pBoletoEmpresaId", "vPBOLETOEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pBoletoEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0591());