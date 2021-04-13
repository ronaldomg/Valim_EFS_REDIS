/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:36:2.40
*/
gx.evt.autoSkip = false;
gx.define('gx0c50', false, function () {
   this.ServerClass =  "gx0c50" ;
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
      this.AV13pSaidaEmpresaId=gx.fn.getControlValue("vPSAIDAEMPRESAID") ;
      this.AV14pSaidaId=gx.fn.getIntegerValue("vPSAIDAID",'.') ;
   };
   this.Validv_Csaidatipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCSAIDATIPO");
         this.AnyError  = 0;
         if ( ! ( this.AV8cSaidaTipo == "1" || this.AV8cSaidaTipo == "2" || this.AV8cSaidaTipo == "3" || this.AV8cSaidaTipo == "4" || this.AV8cSaidaTipo == "5" || this.AV8cSaidaTipo == "6" || this.AV8cSaidaTipo == "7" || this.AV8cSaidaTipo == "8" || this.AV8cSaidaTipo == "9" || this.AV8cSaidaTipo == "10" || this.AV8cSaidaTipo == "11" || (""==this.AV8cSaidaTipo) ) )
         {
            try {
               gxballoon.setError("Campo cSaidaTipo fora do intervalo");
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
   this.e131qk2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141qk1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0c50",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(4306,53,"SAIDAEMPRESAID","Empresa Saída","","SaidaEmpresaId","char",0,"px",10,10,"left",null,[],4306,"SaidaEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4307,54,"SAIDAID","Número da Saída","","SaidaId","int",0,"px",10,10,"right",null,[],4307,"SaidaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(4308,55,"SAIDATIPO","Tipo de Saída","SaidaTipo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(4313,56,"SAIDADATAHORAALT","Saida Data Hora Alt","","SaidaDataHoraAlt","dtime",0,"px",16,16,"right",null,[],4313,"SaidaDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4314,57,"SAIDAUSUARIOALT","Saida Usuario Alt","","SaidaUsuarioAlt","char",0,"px",12,12,"left",null,[],4314,"SaidaUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5955,58,"SAIDATIPOPEDIDOEMPID","Empresa Tipo Pedido","","SaidaTipoPedidoEmpId","char",0,"px",10,10,"left",null,[],5955,"SaidaTipoPedidoEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5956,59,"SAIDATIPOPEDIDOID","Tipo Pedido","","SaidaTipoPedidoId","char",0,"px",3,3,"left",null,[],5956,"SaidaTipoPedidoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(5958,60,"SAIDASITUACAOGRAVACAO","Situação Gravação","SaidaSituacaoGravacao","char",null,0,true,false,0,"px","");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSAIDAEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAEMPRESAID",gxz:"ZV6cSaidaEmpresaId",gxold:"OV6cSaidaEmpresaId",gxvar:"AV6cSaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSaidaEmpresaId=Value},v2z:function(Value){gx.O.ZV6cSaidaEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCSAIDAEMPRESAID",gx.O.AV6cSaidaEmpresaId,0)},c2v:function(){gx.O.AV6cSaidaEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSAIDAID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAID",gxz:"ZV7cSaidaId",gxold:"OV7cSaidaId",gxvar:"AV7cSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cSaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDAID",gx.O.AV7cSaidaId,0)},c2v:function(){gx.O.AV7cSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSAIDATIPO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Csaidatipo,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDATIPO",gxz:"ZV8cSaidaTipo",gxold:"OV8cSaidaTipo",gxvar:"AV8cSaidaTipo",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cSaidaTipo=Value},v2z:function(Value){gx.O.ZV8cSaidaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCSAIDATIPO",gx.O.AV8cSaidaTipo)},c2v:function(){gx.O.AV8cSaidaTipo=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDATIPO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKSAIDADATAHORAALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDADATAHORAALT",gxz:"ZV9cSaidaDataHoraAlt",gxold:"OV9cSaidaDataHoraAlt",gxvar:"AV9cSaidaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cSaidaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cSaidaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDADATAHORAALT",gx.O.AV9cSaidaDataHoraAlt,0)},c2v:function(){gx.O.AV9cSaidaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCSAIDADATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKSAIDAUSUARIOALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAUSUARIOALT",gxz:"ZV10cSaidaUsuarioAlt",gxold:"OV10cSaidaUsuarioAlt",gxvar:"AV10cSaidaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cSaidaUsuarioAlt=Value},v2z:function(Value){gx.O.ZV10cSaidaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCSAIDAUSUARIOALT",gx.O.AV10cSaidaUsuarioAlt,0)},c2v:function(){gx.O.AV10cSaidaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKSAIDATIPOPEDIDOEMPID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDATIPOPEDIDOEMPID",gxz:"ZV11cSaidaTipoPedidoEmpId",gxold:"OV11cSaidaTipoPedidoEmpId",gxvar:"AV11cSaidaTipoPedidoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cSaidaTipoPedidoEmpId=Value},v2z:function(Value){gx.O.ZV11cSaidaTipoPedidoEmpId=Value},v2c:function(){gx.fn.setControlValue("vCSAIDATIPOPEDIDOEMPID",gx.O.AV11cSaidaTipoPedidoEmpId,0)},c2v:function(){gx.O.AV11cSaidaTipoPedidoEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDATIPOPEDIDOEMPID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKSAIDATIPOPEDIDOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDATIPOPEDIDOID",gxz:"ZV12cSaidaTipoPedidoId",gxold:"OV12cSaidaTipoPedidoId",gxvar:"AV12cSaidaTipoPedidoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cSaidaTipoPedidoId=Value},v2z:function(Value){gx.O.ZV12cSaidaTipoPedidoId=Value},v2c:function(){gx.fn.setControlValue("vCSAIDATIPOPEDIDOID",gx.O.AV12cSaidaTipoPedidoId,0)},c2v:function(){gx.O.AV12cSaidaTipoPedidoId=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDATIPOPEDIDOID")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEMPRESAID",gxz:"Z4306SaidaEmpresaId",gxold:"O4306SaidaEmpresaId",gxvar:"A4306SaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4306SaidaEmpresaId=Value},v2z:function(Value){gx.O.Z4306SaidaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A4306SaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4306SaidaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAID",gxz:"Z4307SaidaId",gxold:"O4307SaidaId",gxvar:"A4307SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4307SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4307SaidaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAID",row || gx.fn.currentGridRowImpl(51),gx.O.A4307SaidaId,0)},c2v:function(){gx.O.A4307SaidaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDATIPO",gxz:"Z4308SaidaTipo",gxold:"O4308SaidaTipo",gxvar:"A4308SaidaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A4308SaidaTipo=Value},v2z:function(Value){gx.O.Z4308SaidaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("SAIDATIPO",row || gx.fn.currentGridRowImpl(51),gx.O.A4308SaidaTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4308SaidaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDATIPO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADATAHORAALT",gxz:"Z4313SaidaDataHoraAlt",gxold:"O4313SaidaDataHoraAlt",gxvar:"A4313SaidaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4313SaidaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4313SaidaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDADATAHORAALT",row || gx.fn.currentGridRowImpl(51),gx.O.A4313SaidaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4313SaidaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SAIDADATAHORAALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAUSUARIOALT",gxz:"Z4314SaidaUsuarioAlt",gxold:"O4314SaidaUsuarioAlt",gxvar:"A4314SaidaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4314SaidaUsuarioAlt=Value},v2z:function(Value){gx.O.Z4314SaidaUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAUSUARIOALT",row || gx.fn.currentGridRowImpl(51),gx.O.A4314SaidaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4314SaidaUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAUSUARIOALT",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDATIPOPEDIDOEMPID",gxz:"Z5955SaidaTipoPedidoEmpId",gxold:"O5955SaidaTipoPedidoEmpId",gxvar:"A5955SaidaTipoPedidoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5955SaidaTipoPedidoEmpId=Value},v2z:function(Value){gx.O.Z5955SaidaTipoPedidoEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDATIPOPEDIDOEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A5955SaidaTipoPedidoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5955SaidaTipoPedidoEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDATIPOPEDIDOEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDATIPOPEDIDOID",gxz:"Z5956SaidaTipoPedidoId",gxold:"O5956SaidaTipoPedidoId",gxvar:"A5956SaidaTipoPedidoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5956SaidaTipoPedidoId=Value},v2z:function(Value){gx.O.Z5956SaidaTipoPedidoId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDATIPOPEDIDOID",row || gx.fn.currentGridRowImpl(51),gx.O.A5956SaidaTipoPedidoId,0)},c2v:function(){gx.O.A5956SaidaTipoPedidoId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDATIPOPEDIDOID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDASITUACAOGRAVACAO",gxz:"Z5958SaidaSituacaoGravacao",gxold:"O5958SaidaSituacaoGravacao",gxvar:"A5958SaidaSituacaoGravacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5958SaidaSituacaoGravacao=Value},v2z:function(Value){gx.O.Z5958SaidaSituacaoGravacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("SAIDASITUACAOGRAVACAO",row || gx.fn.currentGridRowImpl(51),gx.O.A5958SaidaSituacaoGravacao)},c2v:function(){gx.O.A5958SaidaSituacaoGravacao=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDASITUACAOGRAVACAO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cSaidaEmpresaId = "" ;
   this.ZV6cSaidaEmpresaId = "" ;
   this.OV6cSaidaEmpresaId = "" ;
   this.AV7cSaidaId = 0 ;
   this.ZV7cSaidaId = 0 ;
   this.OV7cSaidaId = 0 ;
   this.AV8cSaidaTipo = "" ;
   this.ZV8cSaidaTipo = "" ;
   this.OV8cSaidaTipo = "" ;
   this.AV9cSaidaDataHoraAlt = gx.date.nullDate() ;
   this.ZV9cSaidaDataHoraAlt = gx.date.nullDate() ;
   this.OV9cSaidaDataHoraAlt = gx.date.nullDate() ;
   this.AV10cSaidaUsuarioAlt = "" ;
   this.ZV10cSaidaUsuarioAlt = "" ;
   this.OV10cSaidaUsuarioAlt = "" ;
   this.AV11cSaidaTipoPedidoEmpId = "" ;
   this.ZV11cSaidaTipoPedidoEmpId = "" ;
   this.OV11cSaidaTipoPedidoEmpId = "" ;
   this.AV12cSaidaTipoPedidoId = "" ;
   this.ZV12cSaidaTipoPedidoId = "" ;
   this.OV12cSaidaTipoPedidoId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.Z4307SaidaId = 0 ;
   this.O4307SaidaId = 0 ;
   this.Z4308SaidaTipo = "" ;
   this.O4308SaidaTipo = "" ;
   this.Z4313SaidaDataHoraAlt = gx.date.nullDate() ;
   this.O4313SaidaDataHoraAlt = gx.date.nullDate() ;
   this.Z4314SaidaUsuarioAlt = "" ;
   this.O4314SaidaUsuarioAlt = "" ;
   this.Z5955SaidaTipoPedidoEmpId = "" ;
   this.O5955SaidaTipoPedidoEmpId = "" ;
   this.Z5956SaidaTipoPedidoId = "" ;
   this.O5956SaidaTipoPedidoId = "" ;
   this.Z5958SaidaSituacaoGravacao = "" ;
   this.O5958SaidaSituacaoGravacao = "" ;
   this.AV6cSaidaEmpresaId = "" ;
   this.AV7cSaidaId = 0 ;
   this.AV8cSaidaTipo = "" ;
   this.AV9cSaidaDataHoraAlt = gx.date.nullDate() ;
   this.AV10cSaidaUsuarioAlt = "" ;
   this.AV11cSaidaTipoPedidoEmpId = "" ;
   this.AV12cSaidaTipoPedidoId = "" ;
   this.AV13pSaidaEmpresaId = "" ;
   this.AV14pSaidaId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A4306SaidaEmpresaId = "" ;
   this.A4307SaidaId = 0 ;
   this.A4308SaidaTipo = "" ;
   this.A4313SaidaDataHoraAlt = gx.date.nullDate() ;
   this.A4314SaidaUsuarioAlt = "" ;
   this.A5955SaidaTipoPedidoEmpId = "" ;
   this.A5956SaidaTipoPedidoId = "" ;
   this.A5958SaidaSituacaoGravacao = "" ;
   this.Events = {"e131qk2_client": ["ENTER", true] ,"e141qk1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaTipo',fld:'vCSAIDATIPO'},{av:'AV9cSaidaDataHoraAlt',fld:'vCSAIDADATAHORAALT'},{av:'AV10cSaidaUsuarioAlt',fld:'vCSAIDAUSUARIOALT'},{av:'AV11cSaidaTipoPedidoEmpId',fld:'vCSAIDATIPOPEDIDOEMPID'},{av:'AV12cSaidaTipoPedidoId',fld:'vCSAIDATIPOPEDIDOID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A4306SaidaEmpresaId',fld:'SAIDAEMPRESAID'},{av:'A4307SaidaId',fld:'SAIDAID'}],[{av:'AV13pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID'},{av:'AV14pSaidaId',fld:'vPSAIDAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaTipo',fld:'vCSAIDATIPO'},{av:'AV9cSaidaDataHoraAlt',fld:'vCSAIDADATAHORAALT'},{av:'AV10cSaidaUsuarioAlt',fld:'vCSAIDAUSUARIOALT'},{av:'AV11cSaidaTipoPedidoEmpId',fld:'vCSAIDATIPOPEDIDOEMPID'},{av:'AV12cSaidaTipoPedidoId',fld:'vCSAIDATIPOPEDIDOID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaTipo',fld:'vCSAIDATIPO'},{av:'AV9cSaidaDataHoraAlt',fld:'vCSAIDADATAHORAALT'},{av:'AV10cSaidaUsuarioAlt',fld:'vCSAIDAUSUARIOALT'},{av:'AV11cSaidaTipoPedidoEmpId',fld:'vCSAIDATIPOPEDIDOEMPID'},{av:'AV12cSaidaTipoPedidoId',fld:'vCSAIDATIPOPEDIDOID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaTipo',fld:'vCSAIDATIPO'},{av:'AV9cSaidaDataHoraAlt',fld:'vCSAIDADATAHORAALT'},{av:'AV10cSaidaUsuarioAlt',fld:'vCSAIDAUSUARIOALT'},{av:'AV11cSaidaTipoPedidoEmpId',fld:'vCSAIDATIPOPEDIDOEMPID'},{av:'AV12cSaidaTipoPedidoId',fld:'vCSAIDATIPOPEDIDOID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaEmpresaId',fld:'vCSAIDAEMPRESAID'},{av:'AV7cSaidaId',fld:'vCSAIDAID'},{av:'AV8cSaidaTipo',fld:'vCSAIDATIPO'},{av:'AV9cSaidaDataHoraAlt',fld:'vCSAIDADATAHORAALT'},{av:'AV10cSaidaUsuarioAlt',fld:'vCSAIDAUSUARIOALT'},{av:'AV11cSaidaTipoPedidoEmpId',fld:'vCSAIDATIPOPEDIDOEMPID'},{av:'AV12cSaidaTipoPedidoId',fld:'vCSAIDATIPOPEDIDOID'}],[]];
   this.setVCMap("AV13pSaidaEmpresaId", "vPSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV14pSaidaId", "vPSAIDAID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0c50());
