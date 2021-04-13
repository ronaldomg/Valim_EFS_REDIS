/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:26:11.69
*/
gx.evt.autoSkip = false;
gx.define('gx00u1', false, function () {
   this.ServerClass =  "gx00u1" ;
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
      this.AV10pEmpresaHistoricoEmpresaId=gx.fn.getControlValue("vPEMPRESAHISTORICOEMPRESAID") ;
      this.AV11pHistoricoId=gx.fn.getIntegerValue("vPHISTORICOID",'.') ;
   };
   this.Validv_Chistoricocomplemento=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCHISTORICOCOMPLEMENTO");
         this.AnyError  = 0;
         if ( ! ( this.AV7cHistoricoComplemento == "O" || this.AV7cHistoricoComplemento == "P" || this.AV7cHistoricoComplemento == "D" || (""==this.AV7cHistoricoComplemento) ) )
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
   this.e131j92_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141j91_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,33,37,38,39,40,41,42,45];
   this.GXLastCtrlId =45;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",36,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00u1",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",37,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(284,38,"HISTORICOID","Código","","HistoricoId","int",0,"px",7,7,"right",null,[],284,"HistoricoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(282,39,"HISTORICOCOMPLEMENTO","Complemento","HistoricoComplemento","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(805,40,"HISTORICOUSUARIOID","Usuário","","HistoricoUsuarioId","char",0,"px",12,12,"left",null,[],805,"HistoricoUsuarioId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(806,41,"HISTORICODATAHORAALT","Data/Hora última alteração","","HistoricoDataHoraAlt","dtime",0,"px",16,16,"right",null,[],806,"HistoricoDataHoraAlt",true,5,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(283,42,"EMPRESAHISTORICOEMPRESAID","Código Empresa Historico","","EmpresaHistoricoEmpresaId","char",0,"px",10,10,"left",null,[],283,"EmpresaHistoricoEmpresaId",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKHISTORICOID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCHISTORICOID",gxz:"ZV6cHistoricoId",gxold:"OV6cHistoricoId",gxvar:"AV6cHistoricoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cHistoricoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cHistoricoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCHISTORICOID",gx.O.AV6cHistoricoId,0)},c2v:function(){gx.O.AV6cHistoricoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCHISTORICOID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKHISTORICOCOMPLEMENTO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Validv_Chistoricocomplemento,isvalid:null,rgrid:[this.Grid1Container],fld:"vCHISTORICOCOMPLEMENTO",gxz:"ZV7cHistoricoComplemento",gxold:"OV7cHistoricoComplemento",gxvar:"AV7cHistoricoComplemento",ucs:[],op:[19],ip:[19],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV7cHistoricoComplemento=Value},v2z:function(Value){gx.O.ZV7cHistoricoComplemento=Value},v2c:function(){gx.fn.setComboBoxValue("vCHISTORICOCOMPLEMENTO",gx.O.AV7cHistoricoComplemento)},c2v:function(){gx.O.AV7cHistoricoComplemento=this.val()},val:function(){return gx.fn.getControlValue("vCHISTORICOCOMPLEMENTO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKHISTORICOUSUARIOID", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCHISTORICOUSUARIOID",gxz:"ZV8cHistoricoUsuarioId",gxold:"OV8cHistoricoUsuarioId",gxvar:"AV8cHistoricoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cHistoricoUsuarioId=Value},v2z:function(Value){gx.O.ZV8cHistoricoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("vCHISTORICOUSUARIOID",gx.O.AV8cHistoricoUsuarioId,0)},c2v:function(){gx.O.AV8cHistoricoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("vCHISTORICOUSUARIOID")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKHISTORICODATAHORAALT", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCHISTORICODATAHORAALT",gxz:"ZV9cHistoricoDataHoraAlt",gxold:"OV9cHistoricoDataHoraAlt",gxvar:"AV9cHistoricoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cHistoricoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cHistoricoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCHISTORICODATAHORAALT",gx.O.AV9cHistoricoDataHoraAlt,0)},c2v:function(){gx.O.AV9cHistoricoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCHISTORICODATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"GROUP2",grid:0};
   GXValidFnc[33]={fld:"TABLE3",grid:0};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36),gx.O.AV5LinkSelection,gx.O.AV14Linkselection_GXI)},c2v:function(){gx.O.AV14Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(36))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(36))}, gxvar_GXI:'AV14Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOID",gxz:"Z284HistoricoId",gxold:"O284HistoricoId",gxvar:"A284HistoricoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A284HistoricoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z284HistoricoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("HISTORICOID",row || gx.fn.currentGridRowImpl(36),gx.O.A284HistoricoId,0)},c2v:function(){gx.O.A284HistoricoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("HISTORICOID",row || gx.fn.currentGridRowImpl(36),'.')},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOCOMPLEMENTO",gxz:"Z282HistoricoComplemento",gxold:"O282HistoricoComplemento",gxvar:"A282HistoricoComplemento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A282HistoricoComplemento=Value},v2z:function(Value){gx.O.Z282HistoricoComplemento=Value},v2c:function(row){gx.fn.setGridComboBoxValue("HISTORICOCOMPLEMENTO",row || gx.fn.currentGridRowImpl(36),gx.O.A282HistoricoComplemento);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A282HistoricoComplemento=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOCOMPLEMENTO",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOUSUARIOID",gxz:"Z805HistoricoUsuarioId",gxold:"O805HistoricoUsuarioId",gxvar:"A805HistoricoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A805HistoricoUsuarioId=Value},v2z:function(Value){gx.O.Z805HistoricoUsuarioId=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOUSUARIOID",row || gx.fn.currentGridRowImpl(36),gx.O.A805HistoricoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A805HistoricoUsuarioId=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOUSUARIOID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICODATAHORAALT",gxz:"Z806HistoricoDataHoraAlt",gxold:"O806HistoricoDataHoraAlt",gxvar:"A806HistoricoDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A806HistoricoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z806HistoricoDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("HISTORICODATAHORAALT",row || gx.fn.currentGridRowImpl(36),gx.O.A806HistoricoDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A806HistoricoDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("HISTORICODATAHORAALT",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:36,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAHISTORICOEMPRESAID",gxz:"Z283EmpresaHistoricoEmpresaId",gxold:"O283EmpresaHistoricoEmpresaId",gxvar:"A283EmpresaHistoricoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A283EmpresaHistoricoEmpresaId=Value},v2z:function(Value){gx.O.Z283EmpresaHistoricoEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAHISTORICOEMPRESAID",row || gx.fn.currentGridRowImpl(36),gx.O.A283EmpresaHistoricoEmpresaId,0)},c2v:function(){gx.O.A283EmpresaHistoricoEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAHISTORICOEMPRESAID",row || gx.fn.currentGridRowImpl(36))},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABLE4",grid:0};
   this.AV6cHistoricoId = 0 ;
   this.ZV6cHistoricoId = 0 ;
   this.OV6cHistoricoId = 0 ;
   this.AV7cHistoricoComplemento = "" ;
   this.ZV7cHistoricoComplemento = "" ;
   this.OV7cHistoricoComplemento = "" ;
   this.AV8cHistoricoUsuarioId = "" ;
   this.ZV8cHistoricoUsuarioId = "" ;
   this.OV8cHistoricoUsuarioId = "" ;
   this.AV9cHistoricoDataHoraAlt = gx.date.nullDate() ;
   this.ZV9cHistoricoDataHoraAlt = gx.date.nullDate() ;
   this.OV9cHistoricoDataHoraAlt = gx.date.nullDate() ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z284HistoricoId = 0 ;
   this.O284HistoricoId = 0 ;
   this.Z282HistoricoComplemento = "" ;
   this.O282HistoricoComplemento = "" ;
   this.Z805HistoricoUsuarioId = "" ;
   this.O805HistoricoUsuarioId = "" ;
   this.Z806HistoricoDataHoraAlt = gx.date.nullDate() ;
   this.O806HistoricoDataHoraAlt = gx.date.nullDate() ;
   this.Z283EmpresaHistoricoEmpresaId = "" ;
   this.O283EmpresaHistoricoEmpresaId = "" ;
   this.AV6cHistoricoId = 0 ;
   this.AV7cHistoricoComplemento = "" ;
   this.AV8cHistoricoUsuarioId = "" ;
   this.AV9cHistoricoDataHoraAlt = gx.date.nullDate() ;
   this.AV10pEmpresaHistoricoEmpresaId = "" ;
   this.AV11pHistoricoId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A284HistoricoId = 0 ;
   this.A282HistoricoComplemento = "" ;
   this.A805HistoricoUsuarioId = "" ;
   this.A806HistoricoDataHoraAlt = gx.date.nullDate() ;
   this.A283EmpresaHistoricoEmpresaId = "" ;
   this.Events = {"e131j92_client": ["ENTER", true] ,"e141j91_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cHistoricoId',fld:'vCHISTORICOID'},{av:'AV7cHistoricoComplemento',fld:'vCHISTORICOCOMPLEMENTO'},{av:'AV8cHistoricoUsuarioId',fld:'vCHISTORICOUSUARIOID'},{av:'AV9cHistoricoDataHoraAlt',fld:'vCHISTORICODATAHORAALT'},{av:'AV10pEmpresaHistoricoEmpresaId',fld:'vPEMPRESAHISTORICOEMPRESAID',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A284HistoricoId',fld:'HISTORICOID'}],[{av:'AV11pHistoricoId',fld:'vPHISTORICOID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cHistoricoId',fld:'vCHISTORICOID'},{av:'AV7cHistoricoComplemento',fld:'vCHISTORICOCOMPLEMENTO'},{av:'AV8cHistoricoUsuarioId',fld:'vCHISTORICOUSUARIOID'},{av:'AV9cHistoricoDataHoraAlt',fld:'vCHISTORICODATAHORAALT'},{av:'AV10pEmpresaHistoricoEmpresaId',fld:'vPEMPRESAHISTORICOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cHistoricoId',fld:'vCHISTORICOID'},{av:'AV7cHistoricoComplemento',fld:'vCHISTORICOCOMPLEMENTO'},{av:'AV8cHistoricoUsuarioId',fld:'vCHISTORICOUSUARIOID'},{av:'AV9cHistoricoDataHoraAlt',fld:'vCHISTORICODATAHORAALT'},{av:'AV10pEmpresaHistoricoEmpresaId',fld:'vPEMPRESAHISTORICOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cHistoricoId',fld:'vCHISTORICOID'},{av:'AV7cHistoricoComplemento',fld:'vCHISTORICOCOMPLEMENTO'},{av:'AV8cHistoricoUsuarioId',fld:'vCHISTORICOUSUARIOID'},{av:'AV9cHistoricoDataHoraAlt',fld:'vCHISTORICODATAHORAALT'},{av:'AV10pEmpresaHistoricoEmpresaId',fld:'vPEMPRESAHISTORICOEMPRESAID',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cHistoricoId',fld:'vCHISTORICOID'},{av:'AV7cHistoricoComplemento',fld:'vCHISTORICOCOMPLEMENTO'},{av:'AV8cHistoricoUsuarioId',fld:'vCHISTORICOUSUARIOID'},{av:'AV9cHistoricoDataHoraAlt',fld:'vCHISTORICODATAHORAALT'},{av:'AV10pEmpresaHistoricoEmpresaId',fld:'vPEMPRESAHISTORICOEMPRESAID',hsh:true}],[]];
   this.setVCMap("AV10pEmpresaHistoricoEmpresaId", "vPEMPRESAHISTORICOEMPRESAID", 0, "char");
   this.setVCMap("AV11pHistoricoId", "vPHISTORICOID", 0, "int");
   this.setVCMap("AV10pEmpresaHistoricoEmpresaId", "vPEMPRESAHISTORICOEMPRESAID", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar({rfrVar:"AV10pEmpresaHistoricoEmpresaId"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx00u1());
