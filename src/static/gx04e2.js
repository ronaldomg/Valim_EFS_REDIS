/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:28:5.18
*/
gx.evt.autoSkip = false;
gx.define('gx04e2', false, function () {
   this.ServerClass =  "gx04e2" ;
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
      this.AV11pIntegracaoCblEmpresaId=gx.fn.getControlValue("vPINTEGRACAOCBLEMPRESAID") ;
      this.AV12pIntegracaoCblId=gx.fn.getIntegerValue("vPINTEGRACAOCBLID",'.') ;
      this.AV13pIntegracaoCblComplementoTipo=gx.fn.getControlValue("vPINTEGRACAOCBLCOMPLEMENTOTIPO") ;
      this.AV14pIntegracaoCblComplementoPosicao=gx.fn.getIntegerValue("vPINTEGRACAOCBLCOMPLEMENTOPOSICAO",'.') ;
   };
   this.Validv_Cintegracaocblcomplementotipo=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCINTEGRACAOCBLCOMPLEMENTOTIPO");
         this.AnyError  = 0;
         if ( ! ( this.AV6cIntegracaoCblComplementoTipo == "N" || this.AV6cIntegracaoCblComplementoTipo == "C" || this.AV6cIntegracaoCblComplementoTipo == "D" || (""==this.AV6cIntegracaoCblComplementoTipo) ) )
         {
            try {
               gxballoon.setError("Campo cIntegracaoCblComplementoTipo fora do intervalo");
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
   this.e131kn2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141kn1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,48,49,52];
   this.GXLastCtrlId =52;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx04e2",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addComboBox(1488,43,"INTEGRACAOCBLCOMPLEMENTOTIPO","Débito/Crédito","IntegracaoCblComplementoTipo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1489,44,"INTEGRACAOCBLCOMPLEMENTOPOSICA","Posição","","IntegracaoCblComplementoPosica","int",0,"px",2,2,"right",null,[],1489,"IntegracaoCblComplementoPosica",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(1474,45,"INTEGRACAOCBLCOMPLEMENTOCAMPO","Campo","IntegracaoCblComplementoCampo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(1475,46,"INTEGRACAOCBLCOMPLEMENTOUSUARI","Usuário Alteração","","IntegracaoCblComplementoUsuari","char",0,"px",12,12,"left",null,[],1475,"IntegracaoCblComplementoUsuari",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1476,47,"INTEGRACAOCBLCOMPLEMENTODATAHO","Data/Hora Alteração","","IntegracaoCblComplementoDataHo","dtime",0,"px",16,16,"right",null,[],1476,"IntegracaoCblComplementoDataHo",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1486,48,"INTEGRACAOCBLEMPRESAID","Empresa","","IntegracaoCblEmpresaId","char",0,"px",10,10,"left",null,[],1486,"IntegracaoCblEmpresaId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(1487,49,"INTEGRACAOCBLID","Código","","IntegracaoCblId","int",0,"px",4,4,"right",null,[],1487,"IntegracaoCblId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKINTEGRACAOCBLCOMPLEMENTOTIPO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cintegracaocblcomplementotipo,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCBLCOMPLEMENTOTIPO",gxz:"ZV6cIntegracaoCblComplementoTipo",gxold:"OV6cIntegracaoCblComplementoTipo",gxvar:"AV6cIntegracaoCblComplementoTipo",ucs:[],op:[14],ip:[14],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV6cIntegracaoCblComplementoTipo=Value},v2z:function(Value){gx.O.ZV6cIntegracaoCblComplementoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCINTEGRACAOCBLCOMPLEMENTOTIPO",gx.O.AV6cIntegracaoCblComplementoTipo)},c2v:function(){gx.O.AV6cIntegracaoCblComplementoTipo=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOCBLCOMPLEMENTOTIPO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKINTEGRACAOCBLCOMPLEMENTOPOSICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCBLCOMPLEMENTOPOSICAO",gxz:"ZV7cIntegracaoCblComplementoPosicao",gxold:"OV7cIntegracaoCblComplementoPosicao",gxvar:"AV7cIntegracaoCblComplementoPosicao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cIntegracaoCblComplementoPosicao=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cIntegracaoCblComplementoPosicao=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOCBLCOMPLEMENTOPOSICAO",gx.O.AV7cIntegracaoCblComplementoPosicao,0)},c2v:function(){gx.O.AV7cIntegracaoCblComplementoPosicao=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCINTEGRACAOCBLCOMPLEMENTOPOSICAO",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKINTEGRACAOCBLCOMPLEMENTOCAMPO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:2,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCBLCOMPLEMENTOCAMPO",gxz:"ZV8cIntegracaoCblComplementoCampo",gxold:"OV8cIntegracaoCblComplementoCampo",gxvar:"AV8cIntegracaoCblComplementoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cIntegracaoCblComplementoCampo=Value},v2z:function(Value){gx.O.ZV8cIntegracaoCblComplementoCampo=Value},v2c:function(){gx.fn.setComboBoxValue("vCINTEGRACAOCBLCOMPLEMENTOCAMPO",gx.O.AV8cIntegracaoCblComplementoCampo)},c2v:function(){gx.O.AV8cIntegracaoCblComplementoCampo=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOCBLCOMPLEMENTOCAMPO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKINTEGRACAOCBLCOMPLEMENTOUSUARIOALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCBLCOMPLEMENTOUSUARIOALT",gxz:"ZV9cIntegracaoCblComplementoUsuarioAlt",gxold:"OV9cIntegracaoCblComplementoUsuarioAlt",gxvar:"AV9cIntegracaoCblComplementoUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cIntegracaoCblComplementoUsuarioAlt=Value},v2z:function(Value){gx.O.ZV9cIntegracaoCblComplementoUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOCBLCOMPLEMENTOUSUARIOALT",gx.O.AV9cIntegracaoCblComplementoUsuarioAlt,0)},c2v:function(){gx.O.AV9cIntegracaoCblComplementoUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCINTEGRACAOCBLCOMPLEMENTOUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKINTEGRACAOCBLCOMPLEMENTODATAHORAALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCINTEGRACAOCBLCOMPLEMENTODATAHORAALT",gxz:"ZV10cIntegracaoCblComplementoDataHoraAlt",gxold:"OV10cIntegracaoCblComplementoDataHoraAlt",gxvar:"AV10cIntegracaoCblComplementoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cIntegracaoCblComplementoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cIntegracaoCblComplementoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCINTEGRACAOCBLCOMPLEMENTODATAHORAALT",gx.O.AV10cIntegracaoCblComplementoDataHoraAlt,0)},c2v:function(){gx.O.AV10cIntegracaoCblComplementoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCINTEGRACAOCBLCOMPLEMENTODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLCOMPLEMENTOTIPO",gxz:"Z1488IntegracaoCblComplementoTipo",gxold:"O1488IntegracaoCblComplementoTipo",gxvar:"A1488IntegracaoCblComplementoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1488IntegracaoCblComplementoTipo=Value},v2z:function(Value){gx.O.Z1488IntegracaoCblComplementoTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("INTEGRACAOCBLCOMPLEMENTOTIPO",row || gx.fn.currentGridRowImpl(41),gx.O.A1488IntegracaoCblComplementoTipo);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1488IntegracaoCblComplementoTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOCBLCOMPLEMENTOTIPO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:2,dec:0,sign:false,pic:"Z9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLCOMPLEMENTOPOSICA",gxz:"Z1489IntegracaoCblComplementoPosica",gxold:"O1489IntegracaoCblComplementoPosica",gxvar:"A1489IntegracaoCblComplementoPosica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1489IntegracaoCblComplementoPosica=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1489IntegracaoCblComplementoPosica=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLCOMPLEMENTOPOSICA",row || gx.fn.currentGridRowImpl(41),gx.O.A1489IntegracaoCblComplementoPosica,0)},c2v:function(){gx.O.A1489IntegracaoCblComplementoPosica=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INTEGRACAOCBLCOMPLEMENTOPOSICA",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:2,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLCOMPLEMENTOCAMPO",gxz:"Z1474IntegracaoCblComplementoCampo",gxold:"O1474IntegracaoCblComplementoCampo",gxvar:"A1474IntegracaoCblComplementoCampo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A1474IntegracaoCblComplementoCampo=Value},v2z:function(Value){gx.O.Z1474IntegracaoCblComplementoCampo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("INTEGRACAOCBLCOMPLEMENTOCAMPO",row || gx.fn.currentGridRowImpl(41),gx.O.A1474IntegracaoCblComplementoCampo)},c2v:function(){gx.O.A1474IntegracaoCblComplementoCampo=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOCBLCOMPLEMENTOCAMPO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLCOMPLEMENTOUSUARI",gxz:"Z1475IntegracaoCblComplementoUsuari",gxold:"O1475IntegracaoCblComplementoUsuari",gxvar:"A1475IntegracaoCblComplementoUsuari",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1475IntegracaoCblComplementoUsuari=Value},v2z:function(Value){gx.O.Z1475IntegracaoCblComplementoUsuari=Value},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLCOMPLEMENTOUSUARI",row || gx.fn.currentGridRowImpl(41),gx.O.A1475IntegracaoCblComplementoUsuari,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1475IntegracaoCblComplementoUsuari=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOCBLCOMPLEMENTOUSUARI",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLCOMPLEMENTODATAHO",gxz:"Z1476IntegracaoCblComplementoDataHo",gxold:"O1476IntegracaoCblComplementoDataHo",gxvar:"A1476IntegracaoCblComplementoDataHo",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1476IntegracaoCblComplementoDataHo=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z1476IntegracaoCblComplementoDataHo=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLCOMPLEMENTODATAHO",row || gx.fn.currentGridRowImpl(41),gx.O.A1476IntegracaoCblComplementoDataHo,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1476IntegracaoCblComplementoDataHo=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("INTEGRACAOCBLCOMPLEMENTODATAHO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLEMPRESAID",gxz:"Z1486IntegracaoCblEmpresaId",gxold:"O1486IntegracaoCblEmpresaId",gxvar:"A1486IntegracaoCblEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1486IntegracaoCblEmpresaId=Value},v2z:function(Value){gx.O.Z1486IntegracaoCblEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A1486IntegracaoCblEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1486IntegracaoCblEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("INTEGRACAOCBLEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"INTEGRACAOCBLID",gxz:"Z1487IntegracaoCblId",gxold:"O1487IntegracaoCblId",gxvar:"A1487IntegracaoCblId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A1487IntegracaoCblId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z1487IntegracaoCblId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("INTEGRACAOCBLID",row || gx.fn.currentGridRowImpl(41),gx.O.A1487IntegracaoCblId,0)},c2v:function(){gx.O.A1487IntegracaoCblId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("INTEGRACAOCBLID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TABLE4",grid:0};
   this.AV6cIntegracaoCblComplementoTipo = "" ;
   this.ZV6cIntegracaoCblComplementoTipo = "" ;
   this.OV6cIntegracaoCblComplementoTipo = "" ;
   this.AV7cIntegracaoCblComplementoPosicao = 0 ;
   this.ZV7cIntegracaoCblComplementoPosicao = 0 ;
   this.OV7cIntegracaoCblComplementoPosicao = 0 ;
   this.AV8cIntegracaoCblComplementoCampo = "" ;
   this.ZV8cIntegracaoCblComplementoCampo = "" ;
   this.OV8cIntegracaoCblComplementoCampo = "" ;
   this.AV9cIntegracaoCblComplementoUsuarioAlt = "" ;
   this.ZV9cIntegracaoCblComplementoUsuarioAlt = "" ;
   this.OV9cIntegracaoCblComplementoUsuarioAlt = "" ;
   this.AV10cIntegracaoCblComplementoDataHoraAlt = gx.date.nullDate() ;
   this.ZV10cIntegracaoCblComplementoDataHoraAlt = gx.date.nullDate() ;
   this.OV10cIntegracaoCblComplementoDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z1488IntegracaoCblComplementoTipo = "" ;
   this.O1488IntegracaoCblComplementoTipo = "" ;
   this.Z1489IntegracaoCblComplementoPosica = 0 ;
   this.O1489IntegracaoCblComplementoPosica = 0 ;
   this.Z1474IntegracaoCblComplementoCampo = "" ;
   this.O1474IntegracaoCblComplementoCampo = "" ;
   this.Z1475IntegracaoCblComplementoUsuari = "" ;
   this.O1475IntegracaoCblComplementoUsuari = "" ;
   this.Z1476IntegracaoCblComplementoDataHo = gx.date.nullDate() ;
   this.O1476IntegracaoCblComplementoDataHo = gx.date.nullDate() ;
   this.Z1486IntegracaoCblEmpresaId = "" ;
   this.O1486IntegracaoCblEmpresaId = "" ;
   this.Z1487IntegracaoCblId = 0 ;
   this.O1487IntegracaoCblId = 0 ;
   this.AV6cIntegracaoCblComplementoTipo = "" ;
   this.AV7cIntegracaoCblComplementoPosicao = 0 ;
   this.AV8cIntegracaoCblComplementoCampo = "" ;
   this.AV9cIntegracaoCblComplementoUsuarioAlt = "" ;
   this.AV10cIntegracaoCblComplementoDataHoraAlt = gx.date.nullDate() ;
   this.AV11pIntegracaoCblEmpresaId = "" ;
   this.AV12pIntegracaoCblId = 0 ;
   this.AV13pIntegracaoCblComplementoTipo = "" ;
   this.AV14pIntegracaoCblComplementoPosicao = 0 ;
   this.AV5LinkSelection = "" ;
   this.A1488IntegracaoCblComplementoTipo = "" ;
   this.A1489IntegracaoCblComplementoPosica = 0 ;
   this.A1474IntegracaoCblComplementoCampo = "" ;
   this.A1475IntegracaoCblComplementoUsuari = "" ;
   this.A1476IntegracaoCblComplementoDataHo = gx.date.nullDate() ;
   this.A1486IntegracaoCblEmpresaId = "" ;
   this.A1487IntegracaoCblId = 0 ;
   this.Events = {"e131kn2_client": ["ENTER", true] ,"e141kn1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntegracaoCblComplementoTipo',fld:'vCINTEGRACAOCBLCOMPLEMENTOTIPO'},{av:'AV7cIntegracaoCblComplementoPosicao',fld:'vCINTEGRACAOCBLCOMPLEMENTOPOSICAO'},{av:'AV8cIntegracaoCblComplementoCampo',fld:'vCINTEGRACAOCBLCOMPLEMENTOCAMPO'},{av:'AV9cIntegracaoCblComplementoUsuarioAlt',fld:'vCINTEGRACAOCBLCOMPLEMENTOUSUARIOALT'},{av:'AV10cIntegracaoCblComplementoDataHoraAlt',fld:'vCINTEGRACAOCBLCOMPLEMENTODATAHORAALT'},{av:'AV11pIntegracaoCblEmpresaId',fld:'vPINTEGRACAOCBLEMPRESAID',hsh:true},{av:'AV12pIntegracaoCblId',fld:'vPINTEGRACAOCBLID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A1488IntegracaoCblComplementoTipo',fld:'INTEGRACAOCBLCOMPLEMENTOTIPO'},{av:'A1489IntegracaoCblComplementoPosica',fld:'INTEGRACAOCBLCOMPLEMENTOPOSICA'}],[{av:'AV13pIntegracaoCblComplementoTipo',fld:'vPINTEGRACAOCBLCOMPLEMENTOTIPO'},{av:'AV14pIntegracaoCblComplementoPosicao',fld:'vPINTEGRACAOCBLCOMPLEMENTOPOSICAO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntegracaoCblComplementoTipo',fld:'vCINTEGRACAOCBLCOMPLEMENTOTIPO'},{av:'AV7cIntegracaoCblComplementoPosicao',fld:'vCINTEGRACAOCBLCOMPLEMENTOPOSICAO'},{av:'AV8cIntegracaoCblComplementoCampo',fld:'vCINTEGRACAOCBLCOMPLEMENTOCAMPO'},{av:'AV9cIntegracaoCblComplementoUsuarioAlt',fld:'vCINTEGRACAOCBLCOMPLEMENTOUSUARIOALT'},{av:'AV10cIntegracaoCblComplementoDataHoraAlt',fld:'vCINTEGRACAOCBLCOMPLEMENTODATAHORAALT'},{av:'AV11pIntegracaoCblEmpresaId',fld:'vPINTEGRACAOCBLEMPRESAID',hsh:true},{av:'AV12pIntegracaoCblId',fld:'vPINTEGRACAOCBLID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntegracaoCblComplementoTipo',fld:'vCINTEGRACAOCBLCOMPLEMENTOTIPO'},{av:'AV7cIntegracaoCblComplementoPosicao',fld:'vCINTEGRACAOCBLCOMPLEMENTOPOSICAO'},{av:'AV8cIntegracaoCblComplementoCampo',fld:'vCINTEGRACAOCBLCOMPLEMENTOCAMPO'},{av:'AV9cIntegracaoCblComplementoUsuarioAlt',fld:'vCINTEGRACAOCBLCOMPLEMENTOUSUARIOALT'},{av:'AV10cIntegracaoCblComplementoDataHoraAlt',fld:'vCINTEGRACAOCBLCOMPLEMENTODATAHORAALT'},{av:'AV11pIntegracaoCblEmpresaId',fld:'vPINTEGRACAOCBLEMPRESAID',hsh:true},{av:'AV12pIntegracaoCblId',fld:'vPINTEGRACAOCBLID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntegracaoCblComplementoTipo',fld:'vCINTEGRACAOCBLCOMPLEMENTOTIPO'},{av:'AV7cIntegracaoCblComplementoPosicao',fld:'vCINTEGRACAOCBLCOMPLEMENTOPOSICAO'},{av:'AV8cIntegracaoCblComplementoCampo',fld:'vCINTEGRACAOCBLCOMPLEMENTOCAMPO'},{av:'AV9cIntegracaoCblComplementoUsuarioAlt',fld:'vCINTEGRACAOCBLCOMPLEMENTOUSUARIOALT'},{av:'AV10cIntegracaoCblComplementoDataHoraAlt',fld:'vCINTEGRACAOCBLCOMPLEMENTODATAHORAALT'},{av:'AV11pIntegracaoCblEmpresaId',fld:'vPINTEGRACAOCBLEMPRESAID',hsh:true},{av:'AV12pIntegracaoCblId',fld:'vPINTEGRACAOCBLID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cIntegracaoCblComplementoTipo',fld:'vCINTEGRACAOCBLCOMPLEMENTOTIPO'},{av:'AV7cIntegracaoCblComplementoPosicao',fld:'vCINTEGRACAOCBLCOMPLEMENTOPOSICAO'},{av:'AV8cIntegracaoCblComplementoCampo',fld:'vCINTEGRACAOCBLCOMPLEMENTOCAMPO'},{av:'AV9cIntegracaoCblComplementoUsuarioAlt',fld:'vCINTEGRACAOCBLCOMPLEMENTOUSUARIOALT'},{av:'AV10cIntegracaoCblComplementoDataHoraAlt',fld:'vCINTEGRACAOCBLCOMPLEMENTODATAHORAALT'},{av:'AV11pIntegracaoCblEmpresaId',fld:'vPINTEGRACAOCBLEMPRESAID',hsh:true},{av:'AV12pIntegracaoCblId',fld:'vPINTEGRACAOCBLID',hsh:true}],[]];
   this.setVCMap("AV11pIntegracaoCblEmpresaId", "vPINTEGRACAOCBLEMPRESAID", 0, "char");
   this.setVCMap("AV12pIntegracaoCblId", "vPINTEGRACAOCBLID", 0, "int");
   this.setVCMap("AV13pIntegracaoCblComplementoTipo", "vPINTEGRACAOCBLCOMPLEMENTOTIPO", 0, "char");
   this.setVCMap("AV14pIntegracaoCblComplementoPosicao", "vPINTEGRACAOCBLCOMPLEMENTOPOSICAO", 0, "int");
   this.setVCMap("AV11pIntegracaoCblEmpresaId", "vPINTEGRACAOCBLEMPRESAID", 0, "char");
   this.setVCMap("AV12pIntegracaoCblId", "vPINTEGRACAOCBLID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar({rfrVar:"AV11pIntegracaoCblEmpresaId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pIntegracaoCblId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx04e2());
