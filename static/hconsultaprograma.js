/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:50:19.42
*/
gx.evt.autoSkip = false;
gx.define('hconsultaprograma', false, function () {
   this.ServerClass =  "hconsultaprograma" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("6", "'GXM_FIRST'");
   this.addKeyListener("7", "'GXM_PREVIOUS'");
   this.addKeyListener("8", "'GXM_NEXT'");
   this.addKeyListener("9", "'GXM_LAST'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.A499ProgramaAtivo=gx.fn.getControlValue("PROGRAMAATIVO") ;
      this.AV20SistemaIdParm=gx.fn.getControlValue("vSISTEMAIDPARM") ;
      this.AV14ProgramaId=gx.fn.getIntegerValue("vPROGRAMAID",'.') ;
   };
   this.Validv_Sistemaid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vSISTEMAID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e171g2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111g2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121g2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131g2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141g2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151g2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e201g2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e211g1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,23,25,29,31,35,37,41,43,49,50,51,52,53,59,62,64,66,68,70,71,72,73];
   this.GXLastCtrlId =73;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaprograma",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(141,49,"PROGRAMAID","","","ProgramaId","int",0,"px",4,4,"right",null,[],141,"ProgramaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(145,50,"PROGRAMANOME","","","ProgramaNome","svchar",0,"px",40,40,"left",null,[],145,"ProgramaNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(498,51,"PROGRAMALINK","","","ProgramaLink","svchar",0,"px",40,40,"left",null,[],498,"ProgramaLink",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpsit","vBMPSIT",52,0,"px",17,"px",null,"","","Image","");
   GridContainer.addComboBox(497,53,"PROGRAMATIPO","","ProgramaTipo","char",null,0,true,false,0,"px","");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Sistemaid,isvalid:null,rgrid:[this.GridContainer],fld:"vSISTEMAID",gxz:"ZV18SistemaId",gxold:"OV18SistemaId",gxvar:"AV18SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18SistemaId=Value},v2z:function(Value){gx.O.ZV18SistemaId=Value},v2c:function(){gx.fn.setControlValue("vSISTEMAID",gx.O.AV18SistemaId,0)},c2v:function(){gx.O.AV18SistemaId=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMAID")},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSISTEMANOME",gxz:"ZV19SistemaNome",gxold:"OV19SistemaNome",gxvar:"AV19SistemaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19SistemaNome=Value},v2z:function(Value){gx.O.ZV19SistemaNome=Value},v2c:function(){gx.fn.setControlValue("vSISTEMANOME",gx.O.AV19SistemaNome,0)},c2v:function(){gx.O.AV19SistemaNome=this.val()},val:function(){return gx.fn.getControlValue("vSISTEMANOME")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCPROGRAMAID",gxz:"ZV11cProgramaId",gxold:"OV11cProgramaId",gxvar:"AV11cProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11cProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPROGRAMAID",gx.O.AV11cProgramaId,0)},c2v:function(){gx.O.AV11cProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPROGRAMAID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCPROGRAMANOME",gxz:"ZV12cProgramaNome",gxold:"OV12cProgramaNome",gxvar:"AV12cProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cProgramaNome=Value},v2z:function(Value){gx.O.ZV12cProgramaNome=Value},v2c:function(){gx.fn.setControlValue("vCPROGRAMANOME",gx.O.AV12cProgramaNome,0)},c2v:function(){gx.O.AV12cProgramaNome=this.val()},val:function(){return gx.fn.getControlValue("vCPROGRAMANOME")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCPROGRAMALINK",gxz:"ZV13cProgramaLink",gxold:"OV13cProgramaLink",gxvar:"AV13cProgramaLink",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV13cProgramaLink=Value},v2z:function(Value){gx.O.ZV13cProgramaLink=Value},v2c:function(){gx.fn.setControlValue("vCPROGRAMALINK",gx.O.AV13cProgramaLink,0)},c2v:function(){gx.O.AV13cProgramaLink=this.val()},val:function(){return gx.fn.getControlValue("vCPROGRAMALINK")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCPROGRAMAATIVO",gxz:"ZV15CProgramaAtivo",gxold:"OV15CProgramaAtivo",gxvar:"AV15CProgramaAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV15CProgramaAtivo=Value},v2z:function(Value){gx.O.ZV15CProgramaAtivo=Value},v2c:function(){gx.fn.setComboBoxValue("vCPROGRAMAATIVO",gx.O.AV15CProgramaAtivo)},c2v:function(){gx.O.AV15CProgramaAtivo=this.val()},val:function(){return gx.fn.getControlValue("vCPROGRAMAATIVO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCPROGRAMATIPO",gxz:"ZV16cProgramaTipo",gxold:"OV16cProgramaTipo",gxvar:"AV16cProgramaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV16cProgramaTipo=Value},v2z:function(Value){gx.O.ZV16cProgramaTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCPROGRAMATIPO",gx.O.AV16cProgramaTipo)},c2v:function(){gx.O.AV16cProgramaTipo=this.val()},val:function(){return gx.fn.getControlValue("vCPROGRAMATIPO")},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMAID",gxz:"Z141ProgramaId",gxold:"O141ProgramaId",gxvar:"A141ProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A141ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z141ProgramaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROGRAMAID",row || gx.fn.currentGridRowImpl(48),gx.O.A141ProgramaId,0)},c2v:function(){gx.O.A141ProgramaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROGRAMAID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOME",gxz:"Z145ProgramaNome",gxold:"O145ProgramaNome",gxvar:"A145ProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A145ProgramaNome=Value},v2z:function(Value){gx.O.Z145ProgramaNome=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANOME",row || gx.fn.currentGridRowImpl(48),gx.O.A145ProgramaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A145ProgramaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMANOME",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMALINK",gxz:"Z498ProgramaLink",gxold:"O498ProgramaLink",gxvar:"A498ProgramaLink",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A498ProgramaLink=Value},v2z:function(Value){gx.O.Z498ProgramaLink=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMALINK",row || gx.fn.currentGridRowImpl(48),gx.O.A498ProgramaLink,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A498ProgramaLink=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMALINK",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSIT",gxz:"ZV17bmpSit",gxold:"OV17bmpSit",gxvar:"AV17bmpSit",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV17bmpSit=Value},v2z:function(Value){gx.O.ZV17bmpSit=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSIT",row || gx.fn.currentGridRowImpl(48),gx.O.AV17bmpSit,gx.O.AV29Bmpsit_GXI)},c2v:function(){gx.O.AV29Bmpsit_GXI=this.val_GXI();gx.O.AV17bmpSit=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSIT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSIT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV29Bmpsit_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMATIPO",gxz:"Z497ProgramaTipo",gxold:"O497ProgramaTipo",gxvar:"A497ProgramaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A497ProgramaTipo=Value},v2z:function(Value){gx.O.Z497ProgramaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PROGRAMATIPO",row || gx.fn.currentGridRowImpl(48),gx.O.A497ProgramaTipo)},c2v:function(){gx.O.A497ProgramaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMATIPO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[59]={fld:"TABLENAV",grid:0};
   GXValidFnc[62]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[64]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[66]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[68]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[70]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[71]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV24Pagina",gxold:"OV24Pagina",gxvar:"AV24Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV24Pagina)},c2v:function(){gx.O.AV24Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[72]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV25PaginaAux",gxold:"OV25PaginaAux",gxvar:"AV25PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV25PaginaAux,0)},c2v:function(){gx.O.AV25PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[73]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV18SistemaId = "" ;
   this.ZV18SistemaId = "" ;
   this.OV18SistemaId = "" ;
   this.AV19SistemaNome = "" ;
   this.ZV19SistemaNome = "" ;
   this.OV19SistemaNome = "" ;
   this.AV11cProgramaId = 0 ;
   this.ZV11cProgramaId = 0 ;
   this.OV11cProgramaId = 0 ;
   this.AV12cProgramaNome = "" ;
   this.ZV12cProgramaNome = "" ;
   this.OV12cProgramaNome = "" ;
   this.AV13cProgramaLink = "" ;
   this.ZV13cProgramaLink = "" ;
   this.OV13cProgramaLink = "" ;
   this.AV15CProgramaAtivo = "" ;
   this.ZV15CProgramaAtivo = "" ;
   this.OV15CProgramaAtivo = "" ;
   this.AV16cProgramaTipo = "" ;
   this.ZV16cProgramaTipo = "" ;
   this.OV16cProgramaTipo = "" ;
   this.Z141ProgramaId = 0 ;
   this.O141ProgramaId = 0 ;
   this.Z145ProgramaNome = "" ;
   this.O145ProgramaNome = "" ;
   this.Z498ProgramaLink = "" ;
   this.O498ProgramaLink = "" ;
   this.ZV17bmpSit = "" ;
   this.OV17bmpSit = "" ;
   this.Z497ProgramaTipo = "" ;
   this.O497ProgramaTipo = "" ;
   this.AV24Pagina = 0 ;
   this.ZV24Pagina = 0 ;
   this.OV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.ZV25PaginaAux = 0 ;
   this.OV25PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV18SistemaId = "" ;
   this.AV19SistemaNome = "" ;
   this.AV11cProgramaId = 0 ;
   this.AV12cProgramaNome = "" ;
   this.AV13cProgramaLink = "" ;
   this.AV15CProgramaAtivo = "" ;
   this.AV16cProgramaTipo = "" ;
   this.AV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV20SistemaIdParm = "" ;
   this.AV14ProgramaId = 0 ;
   this.A499ProgramaAtivo = "" ;
   this.A140SistemaId = "" ;
   this.A141ProgramaId = 0 ;
   this.A145ProgramaNome = "" ;
   this.A498ProgramaLink = "" ;
   this.AV17bmpSit = "" ;
   this.A497ProgramaTipo = "" ;
   this.A539SistemaNome = "" ;
   this.Events = {"e171g2_client": ["ENTER", true] ,"e111g2_client": ["'GXM_FIRST'", true] ,"e121g2_client": ["'GXM_PREVIOUS'", true] ,"e131g2_client": ["'GXM_NEXT'", true] ,"e141g2_client": ["'GXM_LAST'", true] ,"e151g2_client": ["'PROCURAR'", true] ,"e201g2_client": ["'ATUALIZAPAGINA'", true] ,"e211g1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18SistemaId',fld:'vSISTEMAID'},{av:'AV11cProgramaId',fld:'vCPROGRAMAID'},{av:'AV12cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV13cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV15CProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV16cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'A499ProgramaAtivo',fld:'PROGRAMAATIVO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'PROGRAMAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMAID","Title")',ctrl:'PROGRAMAID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'PROGRAMANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMANOME","Title")',ctrl:'PROGRAMANOME',prop:'Title'},{ctrl:'PROGRAMALINK',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMALINK","Title")',ctrl:'PROGRAMALINK',prop:'Title'},{ctrl:'vBMPSIT',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vBMPSIT","Title")',ctrl:'vBMPSIT',prop:'Title'},{ctrl:'PROGRAMATIPO'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A141ProgramaId',fld:'PROGRAMAID'}],[{av:'AV14ProgramaId',fld:'vPROGRAMAID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18SistemaId',fld:'vSISTEMAID'},{av:'AV11cProgramaId',fld:'vCPROGRAMAID'},{av:'AV12cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV13cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV15CProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV16cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A499ProgramaAtivo',fld:'PROGRAMAATIVO'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18SistemaId',fld:'vSISTEMAID'},{av:'AV11cProgramaId',fld:'vCPROGRAMAID'},{av:'AV12cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV13cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV15CProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV16cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A499ProgramaAtivo',fld:'PROGRAMAATIVO'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18SistemaId',fld:'vSISTEMAID'},{av:'AV11cProgramaId',fld:'vCPROGRAMAID'},{av:'AV12cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV13cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV15CProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV16cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A499ProgramaAtivo',fld:'PROGRAMAATIVO'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18SistemaId',fld:'vSISTEMAID'},{av:'AV11cProgramaId',fld:'vCPROGRAMAID'},{av:'AV12cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV13cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV15CProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV16cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A499ProgramaAtivo',fld:'PROGRAMAATIVO'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A499ProgramaAtivo',fld:'PROGRAMAATIVO'}],[{av:'AV17bmpSit',fld:'vBMPSIT'},{av:'gx.fn.getCtrlProperty("vBMPSIT","Tooltiptext")',ctrl:'vBMPSIT',prop:'Tooltiptext'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18SistemaId',fld:'vSISTEMAID'},{av:'AV11cProgramaId',fld:'vCPROGRAMAID'},{av:'AV12cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV13cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV15CProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV16cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A499ProgramaAtivo',fld:'PROGRAMAATIVO'},{av:'AV17bmpSit',fld:'vBMPSIT'},{av:'AV29Bmpsit_GXI',fld:'vBMPSIT_GXI'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV18SistemaId',fld:'vSISTEMAID'},{av:'AV11cProgramaId',fld:'vCPROGRAMAID'},{av:'AV12cProgramaNome',fld:'vCPROGRAMANOME'},{av:'AV13cProgramaLink',fld:'vCPROGRAMALINK'},{av:'AV15CProgramaAtivo',fld:'vCPROGRAMAATIVO'},{av:'AV16cProgramaTipo',fld:'vCPROGRAMATIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'A499ProgramaAtivo',fld:'PROGRAMAATIVO'}],[]];
   this.setVCMap("A499ProgramaAtivo", "PROGRAMAATIVO", 0, "char");
   this.setVCMap("AV20SistemaIdParm", "vSISTEMAIDPARM", 0, "char");
   this.setVCMap("AV14ProgramaId", "vPROGRAMAID", 0, "int");
   this.setVCMap("A499ProgramaAtivo", "PROGRAMAATIVO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[25]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[37]);
   GridContainer.addRefreshingVar(this.GXValidFnc[43]);
   GridContainer.addRefreshingVar(this.GXValidFnc[73]);
   GridContainer.addRefreshingVar({rfrVar:"A499ProgramaAtivo"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaprograma());
