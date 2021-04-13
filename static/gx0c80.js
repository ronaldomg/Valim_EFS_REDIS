/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:36:23.37
*/
gx.evt.autoSkip = false;
gx.define('gx0c80', false, function () {
   this.ServerClass =  "gx0c80" ;
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
      this.AV12pMargemMarkupCodigo=gx.fn.getControlValue("vPMARGEMMARKUPCODIGO") ;
   };
   this.e131qz2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141qz1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,43,47,48,49,50,51,52,55];
   this.GXLastCtrlId =55;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",46,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0c80",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",47,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(4317,48,"MARGEMMARKUPCODIGO","Margem Markup Codigo","","MargemMarkupCodigo","char",0,"px",8,8,"left",null,[],4317,"MargemMarkupCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4318,49,"MARGEMMARKUPDESCRICAO","Margem Markup Descricao","Selecionar","MargemMarkupDescricao","svchar",0,"px",30,30,"left",null,[],4318,"MargemMarkupDescricao",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(4319,50,"MARGEMMARKUPPERCENTUAL","Margem Markup Percentual","","MargemMarkupPercentual","decimal",0,"px",8,8,"right",null,[],4319,"MargemMarkupPercentual",true,4,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(4315,51,"MARGEMMARKUPMETODO","Margem Markup Metodo","MargemMarkupMetodo","char",null,0,true,false,0,"px","");
   Grid1Container.addSingleLineEdit(4320,52,"MARGEMMARKUPDATAHORAALT","Margem Markup Data Hora Alt","","MargemMarkupDataHoraAlt","dtime",0,"px",16,16,"right",null,[],4320,"MargemMarkupDataHoraAlt",true,5,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKMARGEMMARKUPCODIGO", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMARGEMMARKUPCODIGO",gxz:"ZV6cMargemMarkupCodigo",gxold:"OV6cMargemMarkupCodigo",gxvar:"AV6cMargemMarkupCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cMargemMarkupCodigo=Value},v2z:function(Value){gx.O.ZV6cMargemMarkupCodigo=Value},v2c:function(){gx.fn.setControlValue("vCMARGEMMARKUPCODIGO",gx.O.AV6cMargemMarkupCodigo,0)},c2v:function(){gx.O.AV6cMargemMarkupCodigo=this.val()},val:function(){return gx.fn.getControlValue("vCMARGEMMARKUPCODIGO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKMARGEMMARKUPDESCRICAO", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMARGEMMARKUPDESCRICAO",gxz:"ZV7cMargemMarkupDescricao",gxold:"OV7cMargemMarkupDescricao",gxvar:"AV7cMargemMarkupDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cMargemMarkupDescricao=Value},v2z:function(Value){gx.O.ZV7cMargemMarkupDescricao=Value},v2c:function(){gx.fn.setControlValue("vCMARGEMMARKUPDESCRICAO",gx.O.AV7cMargemMarkupDescricao,0)},c2v:function(){gx.O.AV7cMargemMarkupDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCMARGEMMARKUPDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKMARGEMMARKUPPERCENTUAL", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMARGEMMARKUPPERCENTUAL",gxz:"ZV8cMargemMarkupPercentual",gxold:"OV8cMargemMarkupPercentual",gxvar:"AV8cMargemMarkupPercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cMargemMarkupPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV8cMargemMarkupPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCMARGEMMARKUPPERCENTUAL",gx.O.AV8cMargemMarkupPercentual,4,',')},c2v:function(){gx.O.AV8cMargemMarkupPercentual=this.val()},val:function(){return gx.fn.getDecimalValue("vCMARGEMMARKUPPERCENTUAL",'.',',')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKMARGEMMARKUPMETODO", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMARGEMMARKUPMETODO",gxz:"ZV9cMargemMarkupMetodo",gxold:"OV9cMargemMarkupMetodo",gxvar:"AV9cMargemMarkupMetodo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cMargemMarkupMetodo=Value},v2z:function(Value){gx.O.ZV9cMargemMarkupMetodo=Value},v2c:function(){gx.fn.setComboBoxValue("vCMARGEMMARKUPMETODO",gx.O.AV9cMargemMarkupMetodo)},c2v:function(){gx.O.AV9cMargemMarkupMetodo=this.val()},val:function(){return gx.fn.getControlValue("vCMARGEMMARKUPMETODO")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKMARGEMMARKUPDATAHORAALT", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"dtime",len:10,dec:5,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMARGEMMARKUPDATAHORAALT",gxz:"ZV10cMargemMarkupDataHoraAlt",gxold:"OV10cMargemMarkupDataHoraAlt",gxvar:"AV10cMargemMarkupDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cMargemMarkupDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV10cMargemMarkupDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCMARGEMMARKUPDATAHORAALT",gx.O.AV10cMargemMarkupDataHoraAlt,0)},c2v:function(){gx.O.AV10cMargemMarkupDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCMARGEMMARKUPDATAHORAALT")},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKMARGEMMARKUPUSUARIOALT", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMARGEMMARKUPUSUARIOALT",gxz:"ZV11cMargemMarkupUsuarioAlt",gxold:"OV11cMargemMarkupUsuarioAlt",gxvar:"AV11cMargemMarkupUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cMargemMarkupUsuarioAlt=Value},v2z:function(Value){gx.O.ZV11cMargemMarkupUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCMARGEMMARKUPUSUARIOALT",gx.O.AV11cMargemMarkupUsuarioAlt,0)},c2v:function(){gx.O.AV11cMargemMarkupUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCMARGEMMARKUPUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"GROUP2",grid:0};
   GXValidFnc[43]={fld:"TABLE3",grid:0};
   GXValidFnc[47]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46),gx.O.AV5LinkSelection,gx.O.AV15Linkselection_GXI)},c2v:function(){gx.O.AV15Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(46))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(46))}, gxvar_GXI:'AV15Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[48]={lvl:2,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MARGEMMARKUPCODIGO",gxz:"Z4317MargemMarkupCodigo",gxold:"O4317MargemMarkupCodigo",gxvar:"A4317MargemMarkupCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4317MargemMarkupCodigo=Value},v2z:function(Value){gx.O.Z4317MargemMarkupCodigo=Value},v2c:function(row){gx.fn.setGridControlValue("MARGEMMARKUPCODIGO",row || gx.fn.currentGridRowImpl(46),gx.O.A4317MargemMarkupCodigo,0)},c2v:function(){gx.O.A4317MargemMarkupCodigo=this.val()},val:function(row){return gx.fn.getGridControlValue("MARGEMMARKUPCODIGO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MARGEMMARKUPDESCRICAO",gxz:"Z4318MargemMarkupDescricao",gxold:"O4318MargemMarkupDescricao",gxvar:"A4318MargemMarkupDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4318MargemMarkupDescricao=Value},v2z:function(Value){gx.O.Z4318MargemMarkupDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("MARGEMMARKUPDESCRICAO",row || gx.fn.currentGridRowImpl(46),gx.O.A4318MargemMarkupDescricao,0)},c2v:function(){gx.O.A4318MargemMarkupDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("MARGEMMARKUPDESCRICAO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"decimal",len:8,dec:4,sign:false,pic:"ZZ9.9999",ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MARGEMMARKUPPERCENTUAL",gxz:"Z4319MargemMarkupPercentual",gxold:"O4319MargemMarkupPercentual",gxvar:"A4319MargemMarkupPercentual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4319MargemMarkupPercentual=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4319MargemMarkupPercentual=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("MARGEMMARKUPPERCENTUAL",row || gx.fn.currentGridRowImpl(46),gx.O.A4319MargemMarkupPercentual,4,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4319MargemMarkupPercentual=this.val()},val:function(row){return gx.fn.getGridDecimalValue("MARGEMMARKUPPERCENTUAL",row || gx.fn.currentGridRowImpl(46),'.',',')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MARGEMMARKUPMETODO",gxz:"Z4315MargemMarkupMetodo",gxold:"O4315MargemMarkupMetodo",gxvar:"A4315MargemMarkupMetodo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A4315MargemMarkupMetodo=Value},v2z:function(Value){gx.O.Z4315MargemMarkupMetodo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("MARGEMMARKUPMETODO",row || gx.fn.currentGridRowImpl(46),gx.O.A4315MargemMarkupMetodo)},c2v:function(){gx.O.A4315MargemMarkupMetodo=this.val()},val:function(row){return gx.fn.getGridControlValue("MARGEMMARKUPMETODO",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"dtime",len:10,dec:5,sign:false,ro:1,isacc:0,grid:46,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MARGEMMARKUPDATAHORAALT",gxz:"Z4320MargemMarkupDataHoraAlt",gxold:"O4320MargemMarkupDataHoraAlt",gxvar:"A4320MargemMarkupDataHoraAlt",dp:{f:0,st:true,wn:false,mf:false,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4320MargemMarkupDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z4320MargemMarkupDataHoraAlt=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("MARGEMMARKUPDATAHORAALT",row || gx.fn.currentGridRowImpl(46),gx.O.A4320MargemMarkupDataHoraAlt,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4320MargemMarkupDataHoraAlt=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("MARGEMMARKUPDATAHORAALT",row || gx.fn.currentGridRowImpl(46))},nac:gx.falseFn};
   GXValidFnc[55]={fld:"TABLE4",grid:0};
   this.AV6cMargemMarkupCodigo = "" ;
   this.ZV6cMargemMarkupCodigo = "" ;
   this.OV6cMargemMarkupCodigo = "" ;
   this.AV7cMargemMarkupDescricao = "" ;
   this.ZV7cMargemMarkupDescricao = "" ;
   this.OV7cMargemMarkupDescricao = "" ;
   this.AV8cMargemMarkupPercentual = 0 ;
   this.ZV8cMargemMarkupPercentual = 0 ;
   this.OV8cMargemMarkupPercentual = 0 ;
   this.AV9cMargemMarkupMetodo = "" ;
   this.ZV9cMargemMarkupMetodo = "" ;
   this.OV9cMargemMarkupMetodo = "" ;
   this.AV10cMargemMarkupDataHoraAlt = gx.date.nullDate() ;
   this.ZV10cMargemMarkupDataHoraAlt = gx.date.nullDate() ;
   this.OV10cMargemMarkupDataHoraAlt = gx.date.nullDate() ;
   this.AV11cMargemMarkupUsuarioAlt = "" ;
   this.ZV11cMargemMarkupUsuarioAlt = "" ;
   this.OV11cMargemMarkupUsuarioAlt = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z4317MargemMarkupCodigo = "" ;
   this.O4317MargemMarkupCodigo = "" ;
   this.Z4318MargemMarkupDescricao = "" ;
   this.O4318MargemMarkupDescricao = "" ;
   this.Z4319MargemMarkupPercentual = 0 ;
   this.O4319MargemMarkupPercentual = 0 ;
   this.Z4315MargemMarkupMetodo = "" ;
   this.O4315MargemMarkupMetodo = "" ;
   this.Z4320MargemMarkupDataHoraAlt = gx.date.nullDate() ;
   this.O4320MargemMarkupDataHoraAlt = gx.date.nullDate() ;
   this.AV6cMargemMarkupCodigo = "" ;
   this.AV7cMargemMarkupDescricao = "" ;
   this.AV8cMargemMarkupPercentual = 0 ;
   this.AV9cMargemMarkupMetodo = "" ;
   this.AV10cMargemMarkupDataHoraAlt = gx.date.nullDate() ;
   this.AV11cMargemMarkupUsuarioAlt = "" ;
   this.AV12pMargemMarkupCodigo = "" ;
   this.A4321MargemMarkupUsuarioAlt = "" ;
   this.AV5LinkSelection = "" ;
   this.A4317MargemMarkupCodigo = "" ;
   this.A4318MargemMarkupDescricao = "" ;
   this.A4319MargemMarkupPercentual = 0 ;
   this.A4315MargemMarkupMetodo = "" ;
   this.A4320MargemMarkupDataHoraAlt = gx.date.nullDate() ;
   this.Events = {"e131qz2_client": ["ENTER", true] ,"e141qz1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMargemMarkupCodigo',fld:'vCMARGEMMARKUPCODIGO'},{av:'AV7cMargemMarkupDescricao',fld:'vCMARGEMMARKUPDESCRICAO'},{av:'AV8cMargemMarkupPercentual',fld:'vCMARGEMMARKUPPERCENTUAL'},{av:'AV9cMargemMarkupMetodo',fld:'vCMARGEMMARKUPMETODO'},{av:'AV10cMargemMarkupDataHoraAlt',fld:'vCMARGEMMARKUPDATAHORAALT'},{av:'AV11cMargemMarkupUsuarioAlt',fld:'vCMARGEMMARKUPUSUARIOALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A4317MargemMarkupCodigo',fld:'MARGEMMARKUPCODIGO'}],[{av:'AV12pMargemMarkupCodigo',fld:'vPMARGEMMARKUPCODIGO'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMargemMarkupCodigo',fld:'vCMARGEMMARKUPCODIGO'},{av:'AV7cMargemMarkupDescricao',fld:'vCMARGEMMARKUPDESCRICAO'},{av:'AV8cMargemMarkupPercentual',fld:'vCMARGEMMARKUPPERCENTUAL'},{av:'AV9cMargemMarkupMetodo',fld:'vCMARGEMMARKUPMETODO'},{av:'AV10cMargemMarkupDataHoraAlt',fld:'vCMARGEMMARKUPDATAHORAALT'},{av:'AV11cMargemMarkupUsuarioAlt',fld:'vCMARGEMMARKUPUSUARIOALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMargemMarkupCodigo',fld:'vCMARGEMMARKUPCODIGO'},{av:'AV7cMargemMarkupDescricao',fld:'vCMARGEMMARKUPDESCRICAO'},{av:'AV8cMargemMarkupPercentual',fld:'vCMARGEMMARKUPPERCENTUAL'},{av:'AV9cMargemMarkupMetodo',fld:'vCMARGEMMARKUPMETODO'},{av:'AV10cMargemMarkupDataHoraAlt',fld:'vCMARGEMMARKUPDATAHORAALT'},{av:'AV11cMargemMarkupUsuarioAlt',fld:'vCMARGEMMARKUPUSUARIOALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMargemMarkupCodigo',fld:'vCMARGEMMARKUPCODIGO'},{av:'AV7cMargemMarkupDescricao',fld:'vCMARGEMMARKUPDESCRICAO'},{av:'AV8cMargemMarkupPercentual',fld:'vCMARGEMMARKUPPERCENTUAL'},{av:'AV9cMargemMarkupMetodo',fld:'vCMARGEMMARKUPMETODO'},{av:'AV10cMargemMarkupDataHoraAlt',fld:'vCMARGEMMARKUPDATAHORAALT'},{av:'AV11cMargemMarkupUsuarioAlt',fld:'vCMARGEMMARKUPUSUARIOALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMargemMarkupCodigo',fld:'vCMARGEMMARKUPCODIGO'},{av:'AV7cMargemMarkupDescricao',fld:'vCMARGEMMARKUPDESCRICAO'},{av:'AV8cMargemMarkupPercentual',fld:'vCMARGEMMARKUPPERCENTUAL'},{av:'AV9cMargemMarkupMetodo',fld:'vCMARGEMMARKUPMETODO'},{av:'AV10cMargemMarkupDataHoraAlt',fld:'vCMARGEMMARKUPDATAHORAALT'},{av:'AV11cMargemMarkupUsuarioAlt',fld:'vCMARGEMMARKUPUSUARIOALT'}],[]];
   this.setVCMap("AV12pMargemMarkupCodigo", "vPMARGEMMARKUPCODIGO", 0, "char");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0c80());