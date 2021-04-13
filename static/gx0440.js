/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:27:40.52
*/
gx.evt.autoSkip = false;
gx.define('gx0440', false, function () {
   this.ServerClass =  "gx0440" ;
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
      this.AV13pTransacaoPagRecEmpresaId=gx.fn.getControlValue("vPTRANSACAOPAGRECEMPRESAID") ;
      this.AV14pTransacaoPagRecTipo=gx.fn.getControlValue("vPTRANSACAOPAGRECTIPO") ;
      this.AV15pTransacaoPagRecId=gx.fn.getControlValue("vPTRANSACAOPAGRECID") ;
   };
   this.Validv_Ctransacaopagrectipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCTRANSACAOPAGRECTIPO");
         this.AnyError  = 0;
         if ( ! ( this.AV7cTransacaoPagRecTipo == "0" || this.AV7cTransacaoPagRecTipo == "P" || this.AV7cTransacaoPagRecTipo == "R" || (""==this.AV7cTransacaoPagRecTipo) ) )
         {
            try {
               gxballoon.setError("Campo cTransacaoPagRecTipo fora do intervalo");
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
   this.e131kd2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141kd1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,61];
   this.GXLastCtrlId =61;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0440",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(1212,53,"TRANSACAOPAGRECEMPRESAID","Transacao Pag Rec Empresa Id","","TransacaoPagRecEmpresaId","char",0,"px",10,10,"left",null,[],1212,"TransacaoPagRecEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1175,54,"TRANSACAOPAGRECTIPO","Tipo","TransacaoPagRecTipo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1266,55,"TRANSACAOPAGRECID","Código","","TransacaoPagRecId","char",0,"px",8,8,"left",null,[],1266,"TransacaoPagRecId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1204,56,"TRANSACAOPAGRECDESCRICAO","Descrição","Selecionar","TransacaoPagRecDescricao","svchar",0,"px",40,40,"left",null,[],1204,"TransacaoPagRecDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1200,57,"TRANSACAOPAGRECMOVERDATA","Mover data do Sistema para Tela?","","TransacaoPagRecMoverData","char",0,"px",1,1,"left",null,[],1200,"TransacaoPagRecMoverData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1234,58,"TIPOBAIXAPAGRECTIPO","Tipo de baixa","","TipoBaixaPagRecTipo","char",0,"px",1,1,"left",null,[],1234,"TipoBaixaPagRecTipo",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKTRANSACAOPAGRECEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOPAGRECEMPRESAID",gxz:"ZV6cTransacaoPagRecEmpresaId",gxold:"OV6cTransacaoPagRecEmpresaId",gxvar:"AV6cTransacaoPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTransacaoPagRecEmpresaId=Value},v2z:function(Value){gx.O.ZV6cTransacaoPagRecEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOPAGRECEMPRESAID",gx.O.AV6cTransacaoPagRecEmpresaId,0)},c2v:function(){gx.O.AV6cTransacaoPagRecEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOPAGRECEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKTRANSACAOPAGRECTIPO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ctransacaopagrectipo,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOPAGRECTIPO",gxz:"ZV7cTransacaoPagRecTipo",gxold:"OV7cTransacaoPagRecTipo",gxvar:"AV7cTransacaoPagRecTipo",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7cTransacaoPagRecTipo=Value},v2z:function(Value){gx.O.ZV7cTransacaoPagRecTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCTRANSACAOPAGRECTIPO",gx.O.AV7cTransacaoPagRecTipo)},c2v:function(){gx.O.AV7cTransacaoPagRecTipo=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOPAGRECTIPO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKTRANSACAOPAGRECID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOPAGRECID",gxz:"ZV8cTransacaoPagRecId",gxold:"OV8cTransacaoPagRecId",gxvar:"AV8cTransacaoPagRecId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cTransacaoPagRecId=Value},v2z:function(Value){gx.O.ZV8cTransacaoPagRecId=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOPAGRECID",gx.O.AV8cTransacaoPagRecId,0)},c2v:function(){gx.O.AV8cTransacaoPagRecId=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOPAGRECID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKTRANSACAOPAGRECDESCRICAO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOPAGRECDESCRICAO",gxz:"ZV9cTransacaoPagRecDescricao",gxold:"OV9cTransacaoPagRecDescricao",gxvar:"AV9cTransacaoPagRecDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cTransacaoPagRecDescricao=Value},v2z:function(Value){gx.O.ZV9cTransacaoPagRecDescricao=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOPAGRECDESCRICAO",gx.O.AV9cTransacaoPagRecDescricao,0)},c2v:function(){gx.O.AV9cTransacaoPagRecDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOPAGRECDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKTRANSACAOPAGRECMOVERDATA", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOPAGRECMOVERDATA",gxz:"ZV10cTransacaoPagRecMoverData",gxold:"OV10cTransacaoPagRecMoverData",gxvar:"AV10cTransacaoPagRecMoverData",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTransacaoPagRecMoverData=Value},v2z:function(Value){gx.O.ZV10cTransacaoPagRecMoverData=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOPAGRECMOVERDATA",gx.O.AV10cTransacaoPagRecMoverData,0)},c2v:function(){gx.O.AV10cTransacaoPagRecMoverData=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOPAGRECMOVERDATA")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKTRANSACAOPAGRECSNTRADUTORINC", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOPAGRECSNTRADUTORINC",gxz:"ZV11cTransacaoPagRecSNTradutorInc",gxold:"OV11cTransacaoPagRecSNTradutorInc",gxvar:"AV11cTransacaoPagRecSNTradutorInc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cTransacaoPagRecSNTradutorInc=Value},v2z:function(Value){gx.O.ZV11cTransacaoPagRecSNTradutorInc=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOPAGRECSNTRADUTORINC",gx.O.AV11cTransacaoPagRecSNTradutorInc,0)},c2v:function(){gx.O.AV11cTransacaoPagRecSNTradutorInc=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOPAGRECSNTRADUTORINC")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKTRANSACAOPAGRECSNVENDEDOROBR", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTRANSACAOPAGRECSNVENDEDOROBR",gxz:"ZV12cTransacaoPagRecSNVendedorObr",gxold:"OV12cTransacaoPagRecSNVendedorObr",gxvar:"AV12cTransacaoPagRecSNVendedorObr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cTransacaoPagRecSNVendedorObr=Value},v2z:function(Value){gx.O.ZV12cTransacaoPagRecSNVendedorObr=Value},v2c:function(){gx.fn.setControlValue("vCTRANSACAOPAGRECSNVENDEDOROBR",gx.O.AV12cTransacaoPagRecSNVendedorObr,0)},c2v:function(){gx.O.AV12cTransacaoPagRecSNVendedorObr=this.val()},val:function(){return gx.fn.getControlValue("vCTRANSACAOPAGRECSNVENDEDOROBR")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECEMPRESAID",gxz:"Z1212TransacaoPagRecEmpresaId",gxold:"O1212TransacaoPagRecEmpresaId",gxvar:"A1212TransacaoPagRecEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1212TransacaoPagRecEmpresaId=Value},v2z:function(Value){gx.O.Z1212TransacaoPagRecEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A1212TransacaoPagRecEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1212TransacaoPagRecEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPAGRECEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECTIPO",gxz:"Z1175TransacaoPagRecTipo",gxold:"O1175TransacaoPagRecTipo",gxvar:"A1175TransacaoPagRecTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1175TransacaoPagRecTipo=Value},v2z:function(Value){gx.O.Z1175TransacaoPagRecTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TRANSACAOPAGRECTIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A1175TransacaoPagRecTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1175TransacaoPagRecTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPAGRECTIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECID",gxz:"Z1266TransacaoPagRecId",gxold:"O1266TransacaoPagRecId",gxvar:"A1266TransacaoPagRecId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1266TransacaoPagRecId=Value},v2z:function(Value){gx.O.Z1266TransacaoPagRecId=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPAGRECID",row || gx.fn.currentGridRowImpl(51),gx.O.A1266TransacaoPagRecId,0)},c2v:function(){gx.O.A1266TransacaoPagRecId=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPAGRECID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECDESCRICAO",gxz:"Z1204TransacaoPagRecDescricao",gxold:"O1204TransacaoPagRecDescricao",gxvar:"A1204TransacaoPagRecDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1204TransacaoPagRecDescricao=Value},v2z:function(Value){gx.O.Z1204TransacaoPagRecDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPAGRECDESCRICAO",row || gx.fn.currentGridRowImpl(51),gx.O.A1204TransacaoPagRecDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1204TransacaoPagRecDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPAGRECDESCRICAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TRANSACAOPAGRECMOVERDATA",gxz:"Z1200TransacaoPagRecMoverData",gxold:"O1200TransacaoPagRecMoverData",gxvar:"A1200TransacaoPagRecMoverData",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1200TransacaoPagRecMoverData=Value},v2z:function(Value){gx.O.Z1200TransacaoPagRecMoverData=Value},v2c:function(row){gx.fn.setGridControlValue("TRANSACAOPAGRECMOVERDATA",row || gx.fn.currentGridRowImpl(51),gx.O.A1200TransacaoPagRecMoverData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1200TransacaoPagRecMoverData=this.val()},val:function(row){return gx.fn.getGridControlValue("TRANSACAOPAGRECMOVERDATA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBAIXAPAGRECTIPO",gxz:"Z1234TipoBaixaPagRecTipo",gxold:"O1234TipoBaixaPagRecTipo",gxvar:"A1234TipoBaixaPagRecTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1234TipoBaixaPagRecTipo=Value},v2z:function(Value){gx.O.Z1234TipoBaixaPagRecTipo=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBAIXAPAGRECTIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A1234TipoBaixaPagRecTipo,0)},c2v:function(){gx.O.A1234TipoBaixaPagRecTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBAIXAPAGRECTIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={fld:"TABLE4",grid:0};
   this.AV6cTransacaoPagRecEmpresaId = "" ;
   this.ZV6cTransacaoPagRecEmpresaId = "" ;
   this.OV6cTransacaoPagRecEmpresaId = "" ;
   this.AV7cTransacaoPagRecTipo = "" ;
   this.ZV7cTransacaoPagRecTipo = "" ;
   this.OV7cTransacaoPagRecTipo = "" ;
   this.AV8cTransacaoPagRecId = "" ;
   this.ZV8cTransacaoPagRecId = "" ;
   this.OV8cTransacaoPagRecId = "" ;
   this.AV9cTransacaoPagRecDescricao = "" ;
   this.ZV9cTransacaoPagRecDescricao = "" ;
   this.OV9cTransacaoPagRecDescricao = "" ;
   this.AV10cTransacaoPagRecMoverData = "" ;
   this.ZV10cTransacaoPagRecMoverData = "" ;
   this.OV10cTransacaoPagRecMoverData = "" ;
   this.AV11cTransacaoPagRecSNTradutorInc = "" ;
   this.ZV11cTransacaoPagRecSNTradutorInc = "" ;
   this.OV11cTransacaoPagRecSNTradutorInc = "" ;
   this.AV12cTransacaoPagRecSNVendedorObr = "" ;
   this.ZV12cTransacaoPagRecSNVendedorObr = "" ;
   this.OV12cTransacaoPagRecSNVendedorObr = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1212TransacaoPagRecEmpresaId = "" ;
   this.O1212TransacaoPagRecEmpresaId = "" ;
   this.Z1175TransacaoPagRecTipo = "" ;
   this.O1175TransacaoPagRecTipo = "" ;
   this.Z1266TransacaoPagRecId = "" ;
   this.O1266TransacaoPagRecId = "" ;
   this.Z1204TransacaoPagRecDescricao = "" ;
   this.O1204TransacaoPagRecDescricao = "" ;
   this.Z1200TransacaoPagRecMoverData = "" ;
   this.O1200TransacaoPagRecMoverData = "" ;
   this.Z1234TipoBaixaPagRecTipo = "" ;
   this.O1234TipoBaixaPagRecTipo = "" ;
   this.AV6cTransacaoPagRecEmpresaId = "" ;
   this.AV7cTransacaoPagRecTipo = "" ;
   this.AV8cTransacaoPagRecId = "" ;
   this.AV9cTransacaoPagRecDescricao = "" ;
   this.AV10cTransacaoPagRecMoverData = "" ;
   this.AV11cTransacaoPagRecSNTradutorInc = "" ;
   this.AV12cTransacaoPagRecSNVendedorObr = "" ;
   this.AV13pTransacaoPagRecEmpresaId = "" ;
   this.AV14pTransacaoPagRecTipo = "" ;
   this.AV15pTransacaoPagRecId = "" ;
   this.A1174TransacaoPagRecSNVendedorObr = "" ;
   this.A1152TransacaoPagRecSNTradutorInc = "" ;
   this.AV5LinkSelection = "" ;
   this.A1212TransacaoPagRecEmpresaId = "" ;
   this.A1175TransacaoPagRecTipo = "" ;
   this.A1266TransacaoPagRecId = "" ;
   this.A1204TransacaoPagRecDescricao = "" ;
   this.A1200TransacaoPagRecMoverData = "" ;
   this.A1234TipoBaixaPagRecTipo = "" ;
   this.Events = {"e131kd2_client": ["ENTER", true] ,"e141kd1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoPagRecEmpresaId',fld:'vCTRANSACAOPAGRECEMPRESAID'},{av:'AV7cTransacaoPagRecTipo',fld:'vCTRANSACAOPAGRECTIPO'},{av:'AV8cTransacaoPagRecId',fld:'vCTRANSACAOPAGRECID'},{av:'AV9cTransacaoPagRecDescricao',fld:'vCTRANSACAOPAGRECDESCRICAO'},{av:'AV10cTransacaoPagRecMoverData',fld:'vCTRANSACAOPAGRECMOVERDATA'},{av:'AV11cTransacaoPagRecSNTradutorInc',fld:'vCTRANSACAOPAGRECSNTRADUTORINC'},{av:'AV12cTransacaoPagRecSNVendedorObr',fld:'vCTRANSACAOPAGRECSNVENDEDOROBR'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1212TransacaoPagRecEmpresaId',fld:'TRANSACAOPAGRECEMPRESAID'},{av:'A1175TransacaoPagRecTipo',fld:'TRANSACAOPAGRECTIPO'},{av:'A1266TransacaoPagRecId',fld:'TRANSACAOPAGRECID'}],[{av:'AV13pTransacaoPagRecEmpresaId',fld:'vPTRANSACAOPAGRECEMPRESAID'},{av:'AV14pTransacaoPagRecTipo',fld:'vPTRANSACAOPAGRECTIPO'},{av:'AV15pTransacaoPagRecId',fld:'vPTRANSACAOPAGRECID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoPagRecEmpresaId',fld:'vCTRANSACAOPAGRECEMPRESAID'},{av:'AV7cTransacaoPagRecTipo',fld:'vCTRANSACAOPAGRECTIPO'},{av:'AV8cTransacaoPagRecId',fld:'vCTRANSACAOPAGRECID'},{av:'AV9cTransacaoPagRecDescricao',fld:'vCTRANSACAOPAGRECDESCRICAO'},{av:'AV10cTransacaoPagRecMoverData',fld:'vCTRANSACAOPAGRECMOVERDATA'},{av:'AV11cTransacaoPagRecSNTradutorInc',fld:'vCTRANSACAOPAGRECSNTRADUTORINC'},{av:'AV12cTransacaoPagRecSNVendedorObr',fld:'vCTRANSACAOPAGRECSNVENDEDOROBR'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoPagRecEmpresaId',fld:'vCTRANSACAOPAGRECEMPRESAID'},{av:'AV7cTransacaoPagRecTipo',fld:'vCTRANSACAOPAGRECTIPO'},{av:'AV8cTransacaoPagRecId',fld:'vCTRANSACAOPAGRECID'},{av:'AV9cTransacaoPagRecDescricao',fld:'vCTRANSACAOPAGRECDESCRICAO'},{av:'AV10cTransacaoPagRecMoverData',fld:'vCTRANSACAOPAGRECMOVERDATA'},{av:'AV11cTransacaoPagRecSNTradutorInc',fld:'vCTRANSACAOPAGRECSNTRADUTORINC'},{av:'AV12cTransacaoPagRecSNVendedorObr',fld:'vCTRANSACAOPAGRECSNVENDEDOROBR'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoPagRecEmpresaId',fld:'vCTRANSACAOPAGRECEMPRESAID'},{av:'AV7cTransacaoPagRecTipo',fld:'vCTRANSACAOPAGRECTIPO'},{av:'AV8cTransacaoPagRecId',fld:'vCTRANSACAOPAGRECID'},{av:'AV9cTransacaoPagRecDescricao',fld:'vCTRANSACAOPAGRECDESCRICAO'},{av:'AV10cTransacaoPagRecMoverData',fld:'vCTRANSACAOPAGRECMOVERDATA'},{av:'AV11cTransacaoPagRecSNTradutorInc',fld:'vCTRANSACAOPAGRECSNTRADUTORINC'},{av:'AV12cTransacaoPagRecSNVendedorObr',fld:'vCTRANSACAOPAGRECSNVENDEDOROBR'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cTransacaoPagRecEmpresaId',fld:'vCTRANSACAOPAGRECEMPRESAID'},{av:'AV7cTransacaoPagRecTipo',fld:'vCTRANSACAOPAGRECTIPO'},{av:'AV8cTransacaoPagRecId',fld:'vCTRANSACAOPAGRECID'},{av:'AV9cTransacaoPagRecDescricao',fld:'vCTRANSACAOPAGRECDESCRICAO'},{av:'AV10cTransacaoPagRecMoverData',fld:'vCTRANSACAOPAGRECMOVERDATA'},{av:'AV11cTransacaoPagRecSNTradutorInc',fld:'vCTRANSACAOPAGRECSNTRADUTORINC'},{av:'AV12cTransacaoPagRecSNVendedorObr',fld:'vCTRANSACAOPAGRECSNVENDEDOROBR'}],[]];
   this.setVCMap("AV13pTransacaoPagRecEmpresaId", "vPTRANSACAOPAGRECEMPRESAID", 0, "char");
   this.setVCMap("AV14pTransacaoPagRecTipo", "vPTRANSACAOPAGRECTIPO", 0, "char");
   this.setVCMap("AV15pTransacaoPagRecId", "vPTRANSACAOPAGRECID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0440());
