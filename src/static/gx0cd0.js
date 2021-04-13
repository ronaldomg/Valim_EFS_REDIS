/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:36:32.16
*/
gx.evt.autoSkip = false;
gx.define('gx0cd0', false, function () {
   this.ServerClass =  "gx0cd0" ;
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
      this.AV13pEntradaEmpresaId=gx.fn.getControlValue("vPENTRADAEMPRESAID") ;
      this.AV14pEntradaId=gx.fn.getIntegerValue("vPENTRADAID",'.') ;
   };
   this.Validv_Centradatipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCENTRADATIPO");
         this.AnyError  = 0;
         if ( ! ( this.AV9cEntradaTipo == "1" || this.AV9cEntradaTipo == "2" || this.AV9cEntradaTipo == "3" || this.AV9cEntradaTipo == "4" || this.AV9cEntradaTipo == "5" || this.AV9cEntradaTipo == "6" || this.AV9cEntradaTipo == "7" || (""==this.AV9cEntradaTipo) ) )
         {
            try {
               gxballoon.setError("Campo cEntradaTipo fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e131r32_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141r31_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0cd0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(4637,53,"ENTRADAEMPRESAID","Empresa da Entrada","","EntradaEmpresaId","char",0,"px",10,10,"left",null,[],4637,"EntradaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4638,54,"ENTRADAID","Código da Entrada","","EntradaId","int",0,"px",10,10,"right",null,[],4638,"EntradaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4480,55,"TRANSACAOENTRADAEMPRESAID","Empresa da transação","","TransacaoEntradaEmpresaId","char",0,"px",10,10,"left",null,[],4480,"TransacaoEntradaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(4640,56,"ENTRADATIPO","Tipo de Entrada","EntradaTipo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(4646,57,"ENTRADANUMERODOCUMENTO","Número do Documento","","EntradaNumeroDocumento","int",0,"px",9,9,"right",null,[],4646,"EntradaNumeroDocumento",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4642,58,"ENTRADAFORNECEDOREMPID","Empresa do Fornecedor","","EntradaFornecedorEmpId","char",0,"px",10,10,"left",null,[],4642,"EntradaFornecedorEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4643,59,"ENTRADAFORNECEDORID","Fornecedor","","EntradaFornecedorId","int",0,"px",7,7,"right",null,[],4643,"EntradaFornecedorId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4647,60,"ENTRADASERIE","Série","","EntradaSerie","char",0,"px",4,4,"left",null,[],4647,"EntradaSerie",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKENTRADAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAEMPRESAID",gxz:"ZV6cEntradaEmpresaId",gxold:"OV6cEntradaEmpresaId",gxvar:"AV6cEntradaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEntradaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cEntradaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCENTRADAEMPRESAID",gx.O.AV6cEntradaEmpresaId,0)},c2v:function(){gx.O.AV6cEntradaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCENTRADAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKENTRADAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAID",gxz:"ZV7cEntradaId",gxold:"OV7cEntradaId",gxvar:"AV7cEntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cEntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cEntradaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADAID",gx.O.AV7cEntradaId,0)},c2v:function(){gx.O.AV7cEntradaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTRANSACAOENTRADAEMPRESAID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOENTRADAEMPRESAID",gxz:"ZV8cTransacaoEntradaEmpresaId",gxold:"OV8cTransacaoEntradaEmpresaId",gxvar:"AV8cTransacaoEntradaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTransacaoEntradaEmpresaId=Value},v2z:function(Value){gx.O.ZV8cTransacaoEntradaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOENTRADAEMPRESAID",gx.O.AV8cTransacaoEntradaEmpresaId,0)},c2v:function(){gx.O.AV8cTransacaoEntradaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOENTRADAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKENTRADATIPO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Centradatipo,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADATIPO",gxz:"ZV9cEntradaTipo",gxold:"OV9cEntradaTipo",gxvar:"AV9cEntradaTipo",ucs:[],op:[29],ip:[29],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cEntradaTipo=Value},v2z:function(Value){gx.O.ZV9cEntradaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCENTRADATIPO",gx.O.AV9cEntradaTipo)},c2v:function(){gx.O.AV9cEntradaTipo=this.val()},val:function(){return gx.fn.getControlValue("vCENTRADATIPO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKENTRADANUMERODOCUMENTO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADANUMERODOCUMENTO",gxz:"ZV10cEntradaNumeroDocumento",gxold:"OV10cEntradaNumeroDocumento",gxvar:"AV10cEntradaNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cEntradaNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cEntradaNumeroDocumento=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADANUMERODOCUMENTO",gx.O.AV10cEntradaNumeroDocumento,0)},c2v:function(){gx.O.AV10cEntradaNumeroDocumento=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADANUMERODOCUMENTO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKENTRADAFORNECEDOREMPID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAFORNECEDOREMPID",gxz:"ZV11cEntradaFornecedorEmpId",gxold:"OV11cEntradaFornecedorEmpId",gxvar:"AV11cEntradaFornecedorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cEntradaFornecedorEmpId=Value},v2z:function(Value){gx.O.ZV11cEntradaFornecedorEmpId=Value},v2c:function(){gx.fn.setControlValue("vCENTRADAFORNECEDOREMPID",gx.O.AV11cEntradaFornecedorEmpId,0)},c2v:function(){gx.O.AV11cEntradaFornecedorEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCENTRADAFORNECEDOREMPID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKENTRADAFORNECEDORID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCENTRADAFORNECEDORID",gxz:"ZV12cEntradaFornecedorId",gxold:"OV12cEntradaFornecedorId",gxvar:"AV12cEntradaFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cEntradaFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cEntradaFornecedorId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCENTRADAFORNECEDORID",gx.O.AV12cEntradaFornecedorId,0)},c2v:function(){gx.O.AV12cEntradaFornecedorId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCENTRADAFORNECEDORID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAEMPRESAID",gxz:"Z4637EntradaEmpresaId",gxold:"O4637EntradaEmpresaId",gxvar:"A4637EntradaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4637EntradaEmpresaId=Value},v2z:function(Value){gx.O.Z4637EntradaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A4637EntradaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4637EntradaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAID",gxz:"Z4638EntradaId",gxold:"O4638EntradaId",gxvar:"A4638EntradaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4638EntradaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4638EntradaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAID",row || gx.fn.currentGridRowImpl(51),gx.O.A4638EntradaId,0)},c2v:function(){gx.O.A4638EntradaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOENTRADAEMPRESAID",gxz:"Z4480TransacaoEntradaEmpresaId",gxold:"O4480TransacaoEntradaEmpresaId",gxvar:"A4480TransacaoEntradaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4480TransacaoEntradaEmpresaId=Value},v2z:function(Value){gx.O.Z4480TransacaoEntradaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOENTRADAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A4480TransacaoEntradaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4480TransacaoEntradaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOENTRADAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADATIPO",gxz:"Z4640EntradaTipo",gxold:"O4640EntradaTipo",gxvar:"A4640EntradaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A4640EntradaTipo=Value},v2z:function(Value){gx.O.Z4640EntradaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("ENTRADATIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A4640EntradaTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4640EntradaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADATIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:9,dec:0,sign:false,pic:"ZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADANUMERODOCUMENTO",gxz:"Z4646EntradaNumeroDocumento",gxold:"O4646EntradaNumeroDocumento",gxvar:"A4646EntradaNumeroDocumento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4646EntradaNumeroDocumento=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4646EntradaNumeroDocumento=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADANUMERODOCUMENTO",row || gx.fn.currentGridRowImpl(51),gx.O.A4646EntradaNumeroDocumento,0)},c2v:function(){gx.O.A4646EntradaNumeroDocumento=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADANUMERODOCUMENTO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAFORNECEDOREMPID",gxz:"Z4642EntradaFornecedorEmpId",gxold:"O4642EntradaFornecedorEmpId",gxvar:"A4642EntradaFornecedorEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4642EntradaFornecedorEmpId=Value},v2z:function(Value){gx.O.Z4642EntradaFornecedorEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADAFORNECEDOREMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A4642EntradaFornecedorEmpId,0)},c2v:function(){gx.O.A4642EntradaFornecedorEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADAFORNECEDOREMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADAFORNECEDORID",gxz:"Z4643EntradaFornecedorId",gxold:"O4643EntradaFornecedorId",gxvar:"A4643EntradaFornecedorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4643EntradaFornecedorId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4643EntradaFornecedorId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("ENTRADAFORNECEDORID",row || gx.fn.currentGridRowImpl(51),gx.O.A4643EntradaFornecedorId,0)},c2v:function(){gx.O.A4643EntradaFornecedorId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("ENTRADAFORNECEDORID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:4,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ENTRADASERIE",gxz:"Z4647EntradaSerie",gxold:"O4647EntradaSerie",gxvar:"A4647EntradaSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4647EntradaSerie=Value},v2z:function(Value){gx.O.Z4647EntradaSerie=Value},v2c:function(row){gx.fn.setGridControlValue("ENTRADASERIE",row || gx.fn.currentGridRowImpl(51),gx.O.A4647EntradaSerie,0)},c2v:function(){gx.O.A4647EntradaSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("ENTRADASERIE",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cEntradaEmpresaId = "" ;
   this.ZV6cEntradaEmpresaId = "" ;
   this.OV6cEntradaEmpresaId = "" ;
   this.AV7cEntradaId = 0 ;
   this.ZV7cEntradaId = 0 ;
   this.OV7cEntradaId = 0 ;
   this.AV8cTransacaoEntradaEmpresaId = "" ;
   this.ZV8cTransacaoEntradaEmpresaId = "" ;
   this.OV8cTransacaoEntradaEmpresaId = "" ;
   this.AV9cEntradaTipo = "" ;
   this.ZV9cEntradaTipo = "" ;
   this.OV9cEntradaTipo = "" ;
   this.AV10cEntradaNumeroDocumento = 0 ;
   this.ZV10cEntradaNumeroDocumento = 0 ;
   this.OV10cEntradaNumeroDocumento = 0 ;
   this.AV11cEntradaFornecedorEmpId = "" ;
   this.ZV11cEntradaFornecedorEmpId = "" ;
   this.OV11cEntradaFornecedorEmpId = "" ;
   this.AV12cEntradaFornecedorId = 0 ;
   this.ZV12cEntradaFornecedorId = 0 ;
   this.OV12cEntradaFornecedorId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z4637EntradaEmpresaId = "" ;
   this.O4637EntradaEmpresaId = "" ;
   this.Z4638EntradaId = 0 ;
   this.O4638EntradaId = 0 ;
   this.Z4480TransacaoEntradaEmpresaId = "" ;
   this.O4480TransacaoEntradaEmpresaId = "" ;
   this.Z4640EntradaTipo = "" ;
   this.O4640EntradaTipo = "" ;
   this.Z4646EntradaNumeroDocumento = 0 ;
   this.O4646EntradaNumeroDocumento = 0 ;
   this.Z4642EntradaFornecedorEmpId = "" ;
   this.O4642EntradaFornecedorEmpId = "" ;
   this.Z4643EntradaFornecedorId = 0 ;
   this.O4643EntradaFornecedorId = 0 ;
   this.Z4647EntradaSerie = "" ;
   this.O4647EntradaSerie = "" ;
   this.AV6cEntradaEmpresaId = "" ;
   this.AV7cEntradaId = 0 ;
   this.AV8cTransacaoEntradaEmpresaId = "" ;
   this.AV9cEntradaTipo = "" ;
   this.AV10cEntradaNumeroDocumento = 0 ;
   this.AV11cEntradaFornecedorEmpId = "" ;
   this.AV12cEntradaFornecedorId = 0 ;
   this.AV13pEntradaEmpresaId = "" ;
   this.AV14pEntradaId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A4637EntradaEmpresaId = "" ;
   this.A4638EntradaId = 0 ;
   this.A4480TransacaoEntradaEmpresaId = "" ;
   this.A4640EntradaTipo = "" ;
   this.A4646EntradaNumeroDocumento = 0 ;
   this.A4642EntradaFornecedorEmpId = "" ;
   this.A4643EntradaFornecedorId = 0 ;
   this.A4647EntradaSerie = "" ;
   this.Events = {"e131r32_client": ["ENTER", true] ,"e141r31_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaEmpresaId',fld:'vCENTRADAEMPRESAID'},{av:'AV7cEntradaId',fld:'vCENTRADAID'},{av:'AV8cTransacaoEntradaEmpresaId',fld:'vCTRANSACAOENTRADAEMPRESAID'},{av:'AV9cEntradaTipo',fld:'vCENTRADATIPO'},{av:'AV10cEntradaNumeroDocumento',fld:'vCENTRADANUMERODOCUMENTO'},{av:'AV11cEntradaFornecedorEmpId',fld:'vCENTRADAFORNECEDOREMPID'},{av:'AV12cEntradaFornecedorId',fld:'vCENTRADAFORNECEDORID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A4637EntradaEmpresaId',fld:'ENTRADAEMPRESAID'},{av:'A4638EntradaId',fld:'ENTRADAID'}],[{av:'AV13pEntradaEmpresaId',fld:'vPENTRADAEMPRESAID'},{av:'AV14pEntradaId',fld:'vPENTRADAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaEmpresaId',fld:'vCENTRADAEMPRESAID'},{av:'AV7cEntradaId',fld:'vCENTRADAID'},{av:'AV8cTransacaoEntradaEmpresaId',fld:'vCTRANSACAOENTRADAEMPRESAID'},{av:'AV9cEntradaTipo',fld:'vCENTRADATIPO'},{av:'AV10cEntradaNumeroDocumento',fld:'vCENTRADANUMERODOCUMENTO'},{av:'AV11cEntradaFornecedorEmpId',fld:'vCENTRADAFORNECEDOREMPID'},{av:'AV12cEntradaFornecedorId',fld:'vCENTRADAFORNECEDORID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaEmpresaId',fld:'vCENTRADAEMPRESAID'},{av:'AV7cEntradaId',fld:'vCENTRADAID'},{av:'AV8cTransacaoEntradaEmpresaId',fld:'vCTRANSACAOENTRADAEMPRESAID'},{av:'AV9cEntradaTipo',fld:'vCENTRADATIPO'},{av:'AV10cEntradaNumeroDocumento',fld:'vCENTRADANUMERODOCUMENTO'},{av:'AV11cEntradaFornecedorEmpId',fld:'vCENTRADAFORNECEDOREMPID'},{av:'AV12cEntradaFornecedorId',fld:'vCENTRADAFORNECEDORID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaEmpresaId',fld:'vCENTRADAEMPRESAID'},{av:'AV7cEntradaId',fld:'vCENTRADAID'},{av:'AV8cTransacaoEntradaEmpresaId',fld:'vCTRANSACAOENTRADAEMPRESAID'},{av:'AV9cEntradaTipo',fld:'vCENTRADATIPO'},{av:'AV10cEntradaNumeroDocumento',fld:'vCENTRADANUMERODOCUMENTO'},{av:'AV11cEntradaFornecedorEmpId',fld:'vCENTRADAFORNECEDOREMPID'},{av:'AV12cEntradaFornecedorId',fld:'vCENTRADAFORNECEDORID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEntradaEmpresaId',fld:'vCENTRADAEMPRESAID'},{av:'AV7cEntradaId',fld:'vCENTRADAID'},{av:'AV8cTransacaoEntradaEmpresaId',fld:'vCTRANSACAOENTRADAEMPRESAID'},{av:'AV9cEntradaTipo',fld:'vCENTRADATIPO'},{av:'AV10cEntradaNumeroDocumento',fld:'vCENTRADANUMERODOCUMENTO'},{av:'AV11cEntradaFornecedorEmpId',fld:'vCENTRADAFORNECEDOREMPID'},{av:'AV12cEntradaFornecedorId',fld:'vCENTRADAFORNECEDORID'}],[]];
   this.setVCMap("AV13pEntradaEmpresaId", "vPENTRADAEMPRESAID", 0, "char");
   this.setVCMap("AV14pEntradaId", "vPENTRADAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0cd0());
