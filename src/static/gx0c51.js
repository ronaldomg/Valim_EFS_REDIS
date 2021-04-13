/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:39:10.52
*/
gx.evt.autoSkip = false;
gx.define('gx0c51', false, function () {
   this.ServerClass =  "gx0c51" ;
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
      this.AV12pSaidaEmpresaId=gx.fn.getControlValue("vPSAIDAEMPRESAID") ;
      this.AV13pSaidaId=gx.fn.getIntegerValue("vPSAIDAID",'.') ;
   };
   this.Validv_Csaidatipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCSAIDATIPO");
         this.AnyError  = 0;
         if ( ! ( this.AV7cSaidaTipo == "1" || this.AV7cSaidaTipo == "2" || this.AV7cSaidaTipo == "3" || this.AV7cSaidaTipo == "4" || this.AV7cSaidaTipo == "5" || this.AV7cSaidaTipo == "6" || this.AV7cSaidaTipo == "7" || this.AV7cSaidaTipo == "8" || this.AV7cSaidaTipo == "9" || this.AV7cSaidaTipo == "10" || this.AV7cSaidaTipo == "11" || (""==this.AV7cSaidaTipo) ) )
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
   this.e131t12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141t11_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,53,54,55,56,59];
   this.GXLastCtrlId =59;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0c51",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(4307,48,"SAIDAID","Número da Saída","","SaidaId","int",0,"px",10,10,"right",null,[],4307,"SaidaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(4308,49,"SAIDATIPO","Tipo de Saída","SaidaTipo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(4313,50,"SAIDADATAHORAALT","Saida Data Hora Alt","","SaidaDataHoraAlt","dtime",0,"px",16,16,"right",null,[],4313,"SaidaDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4314,51,"SAIDAUSUARIOALT","Saida Usuario Alt","","SaidaUsuarioAlt","char",0,"px",12,12,"left",null,[],4314,"SaidaUsuarioAlt",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5955,52,"SAIDATIPOPEDIDOEMPID","Empresa Tipo Pedido","","SaidaTipoPedidoEmpId","char",0,"px",10,10,"left",null,[],5955,"SaidaTipoPedidoEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5956,53,"SAIDATIPOPEDIDOID","Tipo Pedido","","SaidaTipoPedidoId","char",0,"px",3,3,"left",null,[],5956,"SaidaTipoPedidoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(5958,54,"SAIDASITUACAOGRAVACAO","Situação Gravação","SaidaSituacaoGravacao","char",null,0,true,false,0,"px","");
   Grid1Container.addComboBox(5959,55,"SAIDASITUACAO","Situação Saída","SaidaSituacao","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(4306,56,"SAIDAEMPRESAID","Empresa Saída","","SaidaEmpresaId","char",0,"px",10,10,"left",null,[],4306,"SaidaEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKSAIDAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAID",gxz:"ZV6cSaidaId",gxold:"OV6cSaidaId",gxvar:"AV6cSaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cSaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cSaidaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDAID",gx.O.AV6cSaidaId,0)},c2v:function(){gx.O.AV6cSaidaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCSAIDAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKSAIDATIPO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Csaidatipo,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDATIPO",gxz:"ZV7cSaidaTipo",gxold:"OV7cSaidaTipo",gxvar:"AV7cSaidaTipo",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7cSaidaTipo=Value},v2z:function(Value){gx.O.ZV7cSaidaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCSAIDATIPO",gx.O.AV7cSaidaTipo)},c2v:function(){gx.O.AV7cSaidaTipo=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDATIPO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKSAIDADATAHORAALT", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDADATAHORAALT",gxz:"ZV8cSaidaDataHoraAlt",gxold:"OV8cSaidaDataHoraAlt",gxvar:"AV8cSaidaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cSaidaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV8cSaidaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCSAIDADATAHORAALT",gx.O.AV8cSaidaDataHoraAlt,0)},c2v:function(){gx.O.AV8cSaidaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCSAIDADATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKSAIDAUSUARIOALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDAUSUARIOALT",gxz:"ZV9cSaidaUsuarioAlt",gxold:"OV9cSaidaUsuarioAlt",gxvar:"AV9cSaidaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cSaidaUsuarioAlt=Value},v2z:function(Value){gx.O.ZV9cSaidaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCSAIDAUSUARIOALT",gx.O.AV9cSaidaUsuarioAlt,0)},c2v:function(){gx.O.AV9cSaidaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDAUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKSAIDATIPOPEDIDOEMPID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDATIPOPEDIDOEMPID",gxz:"ZV10cSaidaTipoPedidoEmpId",gxold:"OV10cSaidaTipoPedidoEmpId",gxvar:"AV10cSaidaTipoPedidoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cSaidaTipoPedidoEmpId=Value},v2z:function(Value){gx.O.ZV10cSaidaTipoPedidoEmpId=Value},v2c:function(){gx.fn.setControlValue("vCSAIDATIPOPEDIDOEMPID",gx.O.AV10cSaidaTipoPedidoEmpId,0)},c2v:function(){gx.O.AV10cSaidaTipoPedidoEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDATIPOPEDIDOEMPID")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKSAIDATIPOPEDIDOID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCSAIDATIPOPEDIDOID",gxz:"ZV11cSaidaTipoPedidoId",gxold:"OV11cSaidaTipoPedidoId",gxvar:"AV11cSaidaTipoPedidoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cSaidaTipoPedidoId=Value},v2z:function(Value){gx.O.ZV11cSaidaTipoPedidoId=Value},v2c:function(){gx.fn.setControlValue("vCSAIDATIPOPEDIDOID",gx.O.AV11cSaidaTipoPedidoId,0)},c2v:function(){gx.O.AV11cSaidaTipoPedidoId=this.val()},val:function(){return gx.fn.getControlValue("vCSAIDATIPOPEDIDOID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAID",gxz:"Z4307SaidaId",gxold:"O4307SaidaId",gxvar:"A4307SaidaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4307SaidaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4307SaidaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDAID",row || gx.fn.currentGridRowImpl(46),gx.O.A4307SaidaId,0)},c2v:function(){gx.O.A4307SaidaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SAIDAID",row || gx.fn.currentGridRowImpl(46),'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDATIPO",gxz:"Z4308SaidaTipo",gxold:"O4308SaidaTipo",gxvar:"A4308SaidaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A4308SaidaTipo=Value},v2z:function(Value){gx.O.Z4308SaidaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("SAIDATIPO",row || gx.fn.currentGridRowImpl(46),gx.O.A4308SaidaTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4308SaidaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDATIPO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDADATAHORAALT",gxz:"Z4313SaidaDataHoraAlt",gxold:"O4313SaidaDataHoraAlt",gxvar:"A4313SaidaDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4313SaidaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4313SaidaDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("SAIDADATAHORAALT",row || gx.fn.currentGridRowImpl(46),gx.O.A4313SaidaDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4313SaidaDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("SAIDADATAHORAALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAUSUARIOALT",gxz:"Z4314SaidaUsuarioAlt",gxold:"O4314SaidaUsuarioAlt",gxvar:"A4314SaidaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4314SaidaUsuarioAlt=Value},v2z:function(Value){gx.O.Z4314SaidaUsuarioAlt=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAUSUARIOALT",row || gx.fn.currentGridRowImpl(46),gx.O.A4314SaidaUsuarioAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4314SaidaUsuarioAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAUSUARIOALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDATIPOPEDIDOEMPID",gxz:"Z5955SaidaTipoPedidoEmpId",gxold:"O5955SaidaTipoPedidoEmpId",gxvar:"A5955SaidaTipoPedidoEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5955SaidaTipoPedidoEmpId=Value},v2z:function(Value){gx.O.Z5955SaidaTipoPedidoEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDATIPOPEDIDOEMPID",row || gx.fn.currentGridRowImpl(46),gx.O.A5955SaidaTipoPedidoEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5955SaidaTipoPedidoEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDATIPOPEDIDOEMPID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:3,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDATIPOPEDIDOID",gxz:"Z5956SaidaTipoPedidoId",gxold:"O5956SaidaTipoPedidoId",gxvar:"A5956SaidaTipoPedidoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5956SaidaTipoPedidoId=Value},v2z:function(Value){gx.O.Z5956SaidaTipoPedidoId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDATIPOPEDIDOID",row || gx.fn.currentGridRowImpl(46),gx.O.A5956SaidaTipoPedidoId,0)},c2v:function(){gx.O.A5956SaidaTipoPedidoId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDATIPOPEDIDOID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDASITUACAOGRAVACAO",gxz:"Z5958SaidaSituacaoGravacao",gxold:"O5958SaidaSituacaoGravacao",gxvar:"A5958SaidaSituacaoGravacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5958SaidaSituacaoGravacao=Value},v2z:function(Value){gx.O.Z5958SaidaSituacaoGravacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("SAIDASITUACAOGRAVACAO",row || gx.fn.currentGridRowImpl(46),gx.O.A5958SaidaSituacaoGravacao)},c2v:function(){gx.O.A5958SaidaSituacaoGravacao=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDASITUACAOGRAVACAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDASITUACAO",gxz:"Z5959SaidaSituacao",gxold:"O5959SaidaSituacao",gxvar:"A5959SaidaSituacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A5959SaidaSituacao=Value},v2z:function(Value){gx.O.Z5959SaidaSituacao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("SAIDASITUACAO",row || gx.fn.currentGridRowImpl(46),gx.O.A5959SaidaSituacao)},c2v:function(){gx.O.A5959SaidaSituacao=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDASITUACAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"SAIDAEMPRESAID",gxz:"Z4306SaidaEmpresaId",gxold:"O4306SaidaEmpresaId",gxvar:"A4306SaidaEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4306SaidaEmpresaId=Value},v2z:function(Value){gx.O.Z4306SaidaEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(46),gx.O.A4306SaidaEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4306SaidaEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("SAIDAEMPRESAID",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLE4",grid:0};
   this.AV6cSaidaId = 0 ;
   this.ZV6cSaidaId = 0 ;
   this.OV6cSaidaId = 0 ;
   this.AV7cSaidaTipo = "" ;
   this.ZV7cSaidaTipo = "" ;
   this.OV7cSaidaTipo = "" ;
   this.AV8cSaidaDataHoraAlt = gx.date.nullDate() ;
   this.ZV8cSaidaDataHoraAlt = gx.date.nullDate() ;
   this.OV8cSaidaDataHoraAlt = gx.date.nullDate() ;
   this.AV9cSaidaUsuarioAlt = "" ;
   this.ZV9cSaidaUsuarioAlt = "" ;
   this.OV9cSaidaUsuarioAlt = "" ;
   this.AV10cSaidaTipoPedidoEmpId = "" ;
   this.ZV10cSaidaTipoPedidoEmpId = "" ;
   this.OV10cSaidaTipoPedidoEmpId = "" ;
   this.AV11cSaidaTipoPedidoId = "" ;
   this.ZV11cSaidaTipoPedidoId = "" ;
   this.OV11cSaidaTipoPedidoId = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
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
   this.Z5959SaidaSituacao = "" ;
   this.O5959SaidaSituacao = "" ;
   this.Z4306SaidaEmpresaId = "" ;
   this.O4306SaidaEmpresaId = "" ;
   this.AV6cSaidaId = 0 ;
   this.AV7cSaidaTipo = "" ;
   this.AV8cSaidaDataHoraAlt = gx.date.nullDate() ;
   this.AV9cSaidaUsuarioAlt = "" ;
   this.AV10cSaidaTipoPedidoEmpId = "" ;
   this.AV11cSaidaTipoPedidoId = "" ;
   this.AV12pSaidaEmpresaId = "" ;
   this.AV13pSaidaId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A4307SaidaId = 0 ;
   this.A4308SaidaTipo = "" ;
   this.A4313SaidaDataHoraAlt = gx.date.nullDate() ;
   this.A4314SaidaUsuarioAlt = "" ;
   this.A5955SaidaTipoPedidoEmpId = "" ;
   this.A5956SaidaTipoPedidoId = "" ;
   this.A5958SaidaSituacaoGravacao = "" ;
   this.A5959SaidaSituacao = "" ;
   this.A4306SaidaEmpresaId = "" ;
   this.Events = {"e131t12_client": ["ENTER", true] ,"e141t11_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaId',fld:'vCSAIDAID'},{av:'AV7cSaidaTipo',fld:'vCSAIDATIPO'},{av:'AV8cSaidaDataHoraAlt',fld:'vCSAIDADATAHORAALT'},{av:'AV9cSaidaUsuarioAlt',fld:'vCSAIDAUSUARIOALT'},{av:'AV10cSaidaTipoPedidoEmpId',fld:'vCSAIDATIPOPEDIDOEMPID'},{av:'AV11cSaidaTipoPedidoId',fld:'vCSAIDATIPOPEDIDOID'},{av:'AV12pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A4307SaidaId',fld:'SAIDAID'}],[{av:'AV13pSaidaId',fld:'vPSAIDAID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaId',fld:'vCSAIDAID'},{av:'AV7cSaidaTipo',fld:'vCSAIDATIPO'},{av:'AV8cSaidaDataHoraAlt',fld:'vCSAIDADATAHORAALT'},{av:'AV9cSaidaUsuarioAlt',fld:'vCSAIDAUSUARIOALT'},{av:'AV10cSaidaTipoPedidoEmpId',fld:'vCSAIDATIPOPEDIDOEMPID'},{av:'AV11cSaidaTipoPedidoId',fld:'vCSAIDATIPOPEDIDOID'},{av:'AV12pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaId',fld:'vCSAIDAID'},{av:'AV7cSaidaTipo',fld:'vCSAIDATIPO'},{av:'AV8cSaidaDataHoraAlt',fld:'vCSAIDADATAHORAALT'},{av:'AV9cSaidaUsuarioAlt',fld:'vCSAIDAUSUARIOALT'},{av:'AV10cSaidaTipoPedidoEmpId',fld:'vCSAIDATIPOPEDIDOEMPID'},{av:'AV11cSaidaTipoPedidoId',fld:'vCSAIDATIPOPEDIDOID'},{av:'AV12pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaId',fld:'vCSAIDAID'},{av:'AV7cSaidaTipo',fld:'vCSAIDATIPO'},{av:'AV8cSaidaDataHoraAlt',fld:'vCSAIDADATAHORAALT'},{av:'AV9cSaidaUsuarioAlt',fld:'vCSAIDAUSUARIOALT'},{av:'AV10cSaidaTipoPedidoEmpId',fld:'vCSAIDATIPOPEDIDOEMPID'},{av:'AV11cSaidaTipoPedidoId',fld:'vCSAIDATIPOPEDIDOID'},{av:'AV12pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cSaidaId',fld:'vCSAIDAID'},{av:'AV7cSaidaTipo',fld:'vCSAIDATIPO'},{av:'AV8cSaidaDataHoraAlt',fld:'vCSAIDADATAHORAALT'},{av:'AV9cSaidaUsuarioAlt',fld:'vCSAIDAUSUARIOALT'},{av:'AV10cSaidaTipoPedidoEmpId',fld:'vCSAIDATIPOPEDIDOEMPID'},{av:'AV11cSaidaTipoPedidoId',fld:'vCSAIDATIPOPEDIDOID'},{av:'AV12pSaidaEmpresaId',fld:'vPSAIDAEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV12pSaidaEmpresaId", "vPSAIDAEMPRESAID", 0, "char");
   this.setVCMap("AV13pSaidaId", "vPSAIDAID", 0, "int");
   this.setVCMap("AV12pSaidaEmpresaId", "vPSAIDAEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar({rfrVar:"AV12pSaidaEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0c51());
