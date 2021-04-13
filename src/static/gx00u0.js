/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:24:36.48
*/
gx.evt.autoSkip = false;
gx.define('gx00u0', false, function () {
   this.ServerClass =  "gx00u0" ;
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
      this.AV11pEmpresaHistoricoEmpresaId=gx.fn.getControlValue("vPEMPRESAHISTORICOEMPRESAID") ;
      this.AV12pHistoricoId=gx.fn.getIntegerValue("vPHISTORICOID",'.') ;
   };
   this.Validv_Chistoricocomplemento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCHISTORICOCOMPLEMENTO");
         this.AnyError  = 0;
         if ( ! ( this.AV8cHistoricoComplemento == "O" || this.AV8cHistoricoComplemento == "P" || this.AV8cHistoricoComplemento == "D" || (""==this.AV8cHistoricoComplemento) ) )
         {
            try {
               gxballoon.setError("Campo cHistoricoComplemento fora do intervalo");
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
   this.e131i22_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141i21_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,50];
   this.GXLastCtrlId =50;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00u0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(283,43,"EMPRESAHISTORICOEMPRESAID","Código Empresa Historico","","EmpresaHistoricoEmpresaId","char",0,"px",10,10,"left",null,[],283,"EmpresaHistoricoEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(284,44,"HISTORICOID","Código","","HistoricoId","int",0,"px",7,7,"right",null,[],284,"HistoricoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(282,45,"HISTORICOCOMPLEMENTO","Complemento","HistoricoComplemento","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(805,46,"HISTORICOUSUARIOID","Usuário","","HistoricoUsuarioId","char",0,"px",12,12,"left",null,[],805,"HistoricoUsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(806,47,"HISTORICODATAHORAALT","Data/Hora última alteração","","HistoricoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],806,"HistoricoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKEMPRESAHISTORICOEMPRESAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCEMPRESAHISTORICOEMPRESAID",gxz:"ZV6cEmpresaHistoricoEmpresaId",gxold:"OV6cEmpresaHistoricoEmpresaId",gxvar:"AV6cEmpresaHistoricoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cEmpresaHistoricoEmpresaId=Value},v2z:function(Value){gx.O.ZV6cEmpresaHistoricoEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCEMPRESAHISTORICOEMPRESAID",gx.O.AV6cEmpresaHistoricoEmpresaId,0)},c2v:function(){gx.O.AV6cEmpresaHistoricoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCEMPRESAHISTORICOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKHISTORICOID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCHISTORICOID",gxz:"ZV7cHistoricoId",gxold:"OV7cHistoricoId",gxvar:"AV7cHistoricoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cHistoricoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cHistoricoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCHISTORICOID",gx.O.AV7cHistoricoId,0)},c2v:function(){gx.O.AV7cHistoricoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCHISTORICOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKHISTORICOCOMPLEMENTO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Chistoricocomplemento,isvalid:null,rgrid:[this.Grid1Container],fld:"vCHISTORICOCOMPLEMENTO",gxz:"ZV8cHistoricoComplemento",gxold:"OV8cHistoricoComplemento",gxvar:"AV8cHistoricoComplemento",ucs:[],op:[24],ip:[24],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cHistoricoComplemento=Value},v2z:function(Value){gx.O.ZV8cHistoricoComplemento=Value},v2c:function(){gx.fn.setComboBoxValue("vCHISTORICOCOMPLEMENTO",gx.O.AV8cHistoricoComplemento)},c2v:function(){gx.O.AV8cHistoricoComplemento=this.val()},val:function(){return gx.fn.getControlValue("vCHISTORICOCOMPLEMENTO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKHISTORICOUSUARIOID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCHISTORICOUSUARIOID",gxz:"ZV9cHistoricoUsuarioId",gxold:"OV9cHistoricoUsuarioId",gxvar:"AV9cHistoricoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cHistoricoUsuarioId=Value},v2z:function(Value){gx.O.ZV9cHistoricoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCHISTORICOUSUARIOID",gx.O.AV9cHistoricoUsuarioId,0)},c2v:function(){gx.O.AV9cHistoricoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCHISTORICOUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKHISTORICODATAHORAALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCHISTORICODATAHORAALT",gxz:"ZV10cHistoricoDataHoraAlt",gxold:"OV10cHistoricoDataHoraAlt",gxvar:"AV10cHistoricoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cHistoricoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cHistoricoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCHISTORICODATAHORAALT",gx.O.AV10cHistoricoDataHoraAlt,0)},c2v:function(){gx.O.AV10cHistoricoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCHISTORICODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV15Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAHISTORICOEMPRESAID",gxz:"Z283EmpresaHistoricoEmpresaId",gxold:"O283EmpresaHistoricoEmpresaId",gxvar:"A283EmpresaHistoricoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A283EmpresaHistoricoEmpresaId=Value},v2z:function(Value){gx.O.Z283EmpresaHistoricoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAHISTORICOEMPRESAID",row || gx.fn.currentGridRowImpl(41),gx.O.A283EmpresaHistoricoEmpresaId,0)},c2v:function(){gx.O.A283EmpresaHistoricoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAHISTORICOEMPRESAID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOID",gxz:"Z284HistoricoId",gxold:"O284HistoricoId",gxvar:"A284HistoricoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A284HistoricoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z284HistoricoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("HISTORICOID",row || gx.fn.currentGridRowImpl(41),gx.O.A284HistoricoId,0)},c2v:function(){gx.O.A284HistoricoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("HISTORICOID",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCOMPLEMENTO",gxz:"Z282HistoricoComplemento",gxold:"O282HistoricoComplemento",gxvar:"A282HistoricoComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A282HistoricoComplemento=Value},v2z:function(Value){gx.O.Z282HistoricoComplemento=Value},v2c:function(row){gx.fn.setGridComboBoxValue("HISTORICOCOMPLEMENTO",row || gx.fn.currentGridRowImpl(41),gx.O.A282HistoricoComplemento);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A282HistoricoComplemento=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOCOMPLEMENTO",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOUSUARIOID",gxz:"Z805HistoricoUsuarioId",gxold:"O805HistoricoUsuarioId",gxvar:"A805HistoricoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A805HistoricoUsuarioId=Value},v2z:function(Value){gx.O.Z805HistoricoUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOUSUARIOID",row || gx.fn.currentGridRowImpl(41),gx.O.A805HistoricoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A805HistoricoUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOUSUARIOID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICODATAHORAALT",gxz:"Z806HistoricoDataHoraAlt",gxold:"O806HistoricoDataHoraAlt",gxvar:"A806HistoricoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A806HistoricoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z806HistoricoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("HISTORICODATAHORAALT",row || gx.fn.currentGridRowImpl(41),gx.O.A806HistoricoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A806HistoricoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("HISTORICODATAHORAALT",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   this.AV6cEmpresaHistoricoEmpresaId = "" ;
   this.ZV6cEmpresaHistoricoEmpresaId = "" ;
   this.OV6cEmpresaHistoricoEmpresaId = "" ;
   this.AV7cHistoricoId = 0 ;
   this.ZV7cHistoricoId = 0 ;
   this.OV7cHistoricoId = 0 ;
   this.AV8cHistoricoComplemento = "" ;
   this.ZV8cHistoricoComplemento = "" ;
   this.OV8cHistoricoComplemento = "" ;
   this.AV9cHistoricoUsuarioId = "" ;
   this.ZV9cHistoricoUsuarioId = "" ;
   this.OV9cHistoricoUsuarioId = "" ;
   this.AV10cHistoricoDataHoraAlt = gx.date.nullDate() ;
   this.ZV10cHistoricoDataHoraAlt = gx.date.nullDate() ;
   this.OV10cHistoricoDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z283EmpresaHistoricoEmpresaId = "" ;
   this.O283EmpresaHistoricoEmpresaId = "" ;
   this.Z284HistoricoId = 0 ;
   this.O284HistoricoId = 0 ;
   this.Z282HistoricoComplemento = "" ;
   this.O282HistoricoComplemento = "" ;
   this.Z805HistoricoUsuarioId = "" ;
   this.O805HistoricoUsuarioId = "" ;
   this.Z806HistoricoDataHoraAlt = gx.date.nullDate() ;
   this.O806HistoricoDataHoraAlt = gx.date.nullDate() ;
   this.AV6cEmpresaHistoricoEmpresaId = "" ;
   this.AV7cHistoricoId = 0 ;
   this.AV8cHistoricoComplemento = "" ;
   this.AV9cHistoricoUsuarioId = "" ;
   this.AV10cHistoricoDataHoraAlt = gx.date.nullDate() ;
   this.AV11pEmpresaHistoricoEmpresaId = "" ;
   this.AV12pHistoricoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A283EmpresaHistoricoEmpresaId = "" ;
   this.A284HistoricoId = 0 ;
   this.A282HistoricoComplemento = "" ;
   this.A805HistoricoUsuarioId = "" ;
   this.A806HistoricoDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e131i22_client": ["ENTER", true] ,"e141i21_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaHistoricoEmpresaId',fld:'vCEMPRESAHISTORICOEMPRESAID'},{av:'AV7cHistoricoId',fld:'vCHISTORICOID'},{av:'AV8cHistoricoComplemento',fld:'vCHISTORICOCOMPLEMENTO'},{av:'AV9cHistoricoUsuarioId',fld:'vCHISTORICOUSUARIOID'},{av:'AV10cHistoricoDataHoraAlt',fld:'vCHISTORICODATAHORAALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A283EmpresaHistoricoEmpresaId',fld:'EMPRESAHISTORICOEMPRESAID'},{av:'A284HistoricoId',fld:'HISTORICOID'}],[{av:'AV11pEmpresaHistoricoEmpresaId',fld:'vPEMPRESAHISTORICOEMPRESAID'},{av:'AV12pHistoricoId',fld:'vPHISTORICOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaHistoricoEmpresaId',fld:'vCEMPRESAHISTORICOEMPRESAID'},{av:'AV7cHistoricoId',fld:'vCHISTORICOID'},{av:'AV8cHistoricoComplemento',fld:'vCHISTORICOCOMPLEMENTO'},{av:'AV9cHistoricoUsuarioId',fld:'vCHISTORICOUSUARIOID'},{av:'AV10cHistoricoDataHoraAlt',fld:'vCHISTORICODATAHORAALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaHistoricoEmpresaId',fld:'vCEMPRESAHISTORICOEMPRESAID'},{av:'AV7cHistoricoId',fld:'vCHISTORICOID'},{av:'AV8cHistoricoComplemento',fld:'vCHISTORICOCOMPLEMENTO'},{av:'AV9cHistoricoUsuarioId',fld:'vCHISTORICOUSUARIOID'},{av:'AV10cHistoricoDataHoraAlt',fld:'vCHISTORICODATAHORAALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaHistoricoEmpresaId',fld:'vCEMPRESAHISTORICOEMPRESAID'},{av:'AV7cHistoricoId',fld:'vCHISTORICOID'},{av:'AV8cHistoricoComplemento',fld:'vCHISTORICOCOMPLEMENTO'},{av:'AV9cHistoricoUsuarioId',fld:'vCHISTORICOUSUARIOID'},{av:'AV10cHistoricoDataHoraAlt',fld:'vCHISTORICODATAHORAALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cEmpresaHistoricoEmpresaId',fld:'vCEMPRESAHISTORICOEMPRESAID'},{av:'AV7cHistoricoId',fld:'vCHISTORICOID'},{av:'AV8cHistoricoComplemento',fld:'vCHISTORICOCOMPLEMENTO'},{av:'AV9cHistoricoUsuarioId',fld:'vCHISTORICOUSUARIOID'},{av:'AV10cHistoricoDataHoraAlt',fld:'vCHISTORICODATAHORAALT'}],[]];
   this.setVCMap("AV11pEmpresaHistoricoEmpresaId", "vPEMPRESAHISTORICOEMPRESAID", 0, "char");
   this.setVCMap("AV12pHistoricoId", "vPHISTORICOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx00u0());
