/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:49:0.53
*/
gx.evt.autoSkip = false;
gx.define('hconsultacidades', false, function () {
   this.ServerClass =  "hconsultacidades" ;
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
      this.AV15PCidadesId=gx.fn.getIntegerValue("vPCIDADESID",'.') ;
   };
   this.Validv_Cidadesuf=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCIDADESUF");
         this.AnyError  = 0;
         if ( ! ( this.AV13CidadesUF == "" || this.AV13CidadesUF == "AC" || this.AV13CidadesUF == "AL" || this.AV13CidadesUF == "AP" || this.AV13CidadesUF == "AM" || this.AV13CidadesUF == "BA" || this.AV13CidadesUF == "CE" || this.AV13CidadesUF == "DF" || this.AV13CidadesUF == "ES" || this.AV13CidadesUF == "GO" || this.AV13CidadesUF == "MA" || this.AV13CidadesUF == "MT" || this.AV13CidadesUF == "MS" || this.AV13CidadesUF == "MG" || this.AV13CidadesUF == "PA" || this.AV13CidadesUF == "PB" || this.AV13CidadesUF == "PR" || this.AV13CidadesUF == "PE" || this.AV13CidadesUF == "PI" || this.AV13CidadesUF == "RJ" || this.AV13CidadesUF == "RN" || this.AV13CidadesUF == "RS" || this.AV13CidadesUF == "RO" || this.AV13CidadesUF == "RR" || this.AV13CidadesUF == "SC" || this.AV13CidadesUF == "SP" || this.AV13CidadesUF == "SE" || this.AV13CidadesUF == "TO" || this.AV13CidadesUF == "EX" || (""==this.AV13CidadesUF) ) )
         {
            try {
               gxballoon.setError("Campo CidadesUF fora do intervalo");
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
   this.e180x2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e110x2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e120x2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e130x2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e140x2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e150x2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e200x2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e160x2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e220x1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,29,30,31,32,33,39,42,45,47,49,51,53,54,55,56];
   this.GXLastCtrlId =56;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",28,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultacidades",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(147,29,"CIDADESID","","","CidadesId","int",0,"px",8,8,"right",null,[],147,"CidadesId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(149,30,"CIDADESNOME","","","CidadesNome","svchar",0,"px",40,40,"left",null,[],149,"CidadesNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(157,31,"CIDADESUF","","CidadesUF","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(160,32,"PAISESNOME","Nome do País","","PaisesNome","svchar",0,"px",40,40,"left",null,[],160,"PaisesNome",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(158,33,"CIDADESCODIBGE","","","CidadesCodIbge","int",0,"px",7,7,"right",null,[],158,"CidadesCodIbge",true,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCIDADESID",gxz:"ZV11CidadesId",gxold:"OV11CidadesId",gxvar:"AV11CidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11CidadesId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCIDADESID",gx.O.AV11CidadesId,0)},c2v:function(){gx.O.AV11CidadesId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCIDADESID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCIDADESNOME",gxz:"ZV12CidadesNome",gxold:"OV12CidadesNome",gxvar:"AV12CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12CidadesNome=Value},v2z:function(Value){gx.O.ZV12CidadesNome=Value},v2c:function(){gx.fn.setControlValue("vCIDADESNOME",gx.O.AV12CidadesNome,0)},c2v:function(){gx.O.AV12CidadesNome=this.val()},val:function(){return gx.fn.getControlValue("vCIDADESNOME")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Cidadesuf,isvalid:null,rgrid:[this.GridContainer],fld:"vCIDADESUF",gxz:"ZV13CidadesUF",gxold:"OV13CidadesUF",gxvar:"AV13CidadesUF",ucs:[],op:[23],ip:[23],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV13CidadesUF=Value},v2z:function(Value){gx.O.ZV13CidadesUF=Value},v2c:function(){gx.fn.setComboBoxValue("vCIDADESUF",gx.O.AV13CidadesUF)},c2v:function(){gx.O.AV13CidadesUF=this.val()},val:function(){return gx.fn.getControlValue("vCIDADESUF")},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESID",gxz:"Z147CidadesId",gxold:"O147CidadesId",gxvar:"A147CidadesId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A147CidadesId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z147CidadesId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CIDADESID",row || gx.fn.currentGridRowImpl(28),gx.O.A147CidadesId,0)},c2v:function(){gx.O.A147CidadesId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CIDADESID",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESNOME",gxz:"Z149CidadesNome",gxold:"O149CidadesNome",gxvar:"A149CidadesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A149CidadesNome=Value},v2z:function(Value){gx.O.Z149CidadesNome=Value},v2c:function(row){gx.fn.setGridControlValue("CIDADESNOME",row || gx.fn.currentGridRowImpl(28),gx.O.A149CidadesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A149CidadesNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CIDADESNOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESUF",gxz:"Z157CidadesUF",gxold:"O157CidadesUF",gxvar:"A157CidadesUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A157CidadesUF=Value},v2z:function(Value){gx.O.Z157CidadesUF=Value},v2c:function(row){gx.fn.setGridComboBoxValue("CIDADESUF",row || gx.fn.currentGridRowImpl(28),gx.O.A157CidadesUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A157CidadesUF=this.val()},val:function(row){return gx.fn.getGridControlValue("CIDADESUF",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PAISESNOME",gxz:"Z160PaisesNome",gxold:"O160PaisesNome",gxvar:"A160PaisesNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A160PaisesNome=Value},v2z:function(Value){gx.O.Z160PaisesNome=Value},v2c:function(row){gx.fn.setGridControlValue("PAISESNOME",row || gx.fn.currentGridRowImpl(28),gx.O.A160PaisesNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A160PaisesNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PAISESNOME",row || gx.fn.currentGridRowImpl(28))},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:28,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CIDADESCODIBGE",gxz:"Z158CidadesCodIbge",gxold:"O158CidadesCodIbge",gxvar:"A158CidadesCodIbge",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A158CidadesCodIbge=gx.num.intval(Value)},v2z:function(Value){gx.O.Z158CidadesCodIbge=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CIDADESCODIBGE",row || gx.fn.currentGridRowImpl(28),gx.O.A158CidadesCodIbge,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A158CidadesCodIbge=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CIDADESCODIBGE",row || gx.fn.currentGridRowImpl(28),'.')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLENAV",grid:0};
   GXValidFnc[42]={fld:"BTNADD",grid:0};
   GXValidFnc[45]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[47]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[49]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[51]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[53]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV18Pagina",gxold:"OV18Pagina",gxvar:"AV18Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV18Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV18Pagina)},c2v:function(){gx.O.AV18Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV19PaginaAux",gxold:"OV19PaginaAux",gxvar:"AV19PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV19PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV19PaginaAux,0)},c2v:function(){gx.O.AV19PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV11CidadesId = 0 ;
   this.ZV11CidadesId = 0 ;
   this.OV11CidadesId = 0 ;
   this.AV12CidadesNome = "" ;
   this.ZV12CidadesNome = "" ;
   this.OV12CidadesNome = "" ;
   this.AV13CidadesUF = "" ;
   this.ZV13CidadesUF = "" ;
   this.OV13CidadesUF = "" ;
   this.Z147CidadesId = 0 ;
   this.O147CidadesId = 0 ;
   this.Z149CidadesNome = "" ;
   this.O149CidadesNome = "" ;
   this.Z157CidadesUF = "" ;
   this.O157CidadesUF = "" ;
   this.Z160PaisesNome = "" ;
   this.O160PaisesNome = "" ;
   this.Z158CidadesCodIbge = 0 ;
   this.O158CidadesCodIbge = 0 ;
   this.AV18Pagina = 0 ;
   this.ZV18Pagina = 0 ;
   this.OV18Pagina = 0 ;
   this.AV19PaginaAux = 0 ;
   this.ZV19PaginaAux = 0 ;
   this.OV19PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV11CidadesId = 0 ;
   this.AV12CidadesNome = "" ;
   this.AV13CidadesUF = "" ;
   this.AV18Pagina = 0 ;
   this.AV19PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV15PCidadesId = 0 ;
   this.A10373CidadesNomeSemAcento = "" ;
   this.A159PaisesId = 0 ;
   this.A147CidadesId = 0 ;
   this.A149CidadesNome = "" ;
   this.A157CidadesUF = "" ;
   this.A160PaisesNome = "" ;
   this.A158CidadesCodIbge = 0 ;
   this.Events = {"e180x2_client": ["ENTER", true] ,"e110x2_client": ["'GXM_FIRST'", true] ,"e120x2_client": ["'GXM_PREVIOUS'", true] ,"e130x2_client": ["'GXM_NEXT'", true] ,"e140x2_client": ["'GXM_LAST'", true] ,"e150x2_client": ["'PROCURAR'", true] ,"e200x2_client": ["'ATUALIZAPAGINA'", true] ,"e160x2_client": ["'NOVO'", true] ,"e220x1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11CidadesId',fld:'vCIDADESID'},{av:'AV12CidadesNome',fld:'vCIDADESNOME'},{av:'AV13CidadesUF',fld:'vCIDADESUF'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'CIDADESID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CIDADESID","Title")',ctrl:'CIDADESID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'CIDADESNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CIDADESNOME","Title")',ctrl:'CIDADESNOME',prop:'Title'},{ctrl:'CIDADESUF'},{ctrl:'CIDADESCODIBGE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CIDADESCODIBGE","Title")',ctrl:'CIDADESCODIBGE',prop:'Title'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV17NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV11CidadesId',fld:'vCIDADESID'},{av:'AV12CidadesNome',fld:'vCIDADESNOME'},{av:'AV13CidadesUF',fld:'vCIDADESUF'}]];
   this.EvtParms["ENTER"] = [[{av:'A147CidadesId',fld:'CIDADESID'}],[{av:'AV15PCidadesId',fld:'vPCIDADESID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11CidadesId',fld:'vCIDADESID'},{av:'AV12CidadesNome',fld:'vCIDADESNOME'},{av:'AV13CidadesUF',fld:'vCIDADESUF'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11CidadesId',fld:'vCIDADESID'},{av:'AV12CidadesNome',fld:'vCIDADESNOME'},{av:'AV13CidadesUF',fld:'vCIDADESUF'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18Pagina',fld:'vPAGINA'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11CidadesId',fld:'vCIDADESID'},{av:'AV12CidadesNome',fld:'vCIDADESNOME'},{av:'AV13CidadesUF',fld:'vCIDADESUF'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18Pagina',fld:'vPAGINA'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11CidadesId',fld:'vCIDADESID'},{av:'AV12CidadesNome',fld:'vCIDADESNOME'},{av:'AV13CidadesUF',fld:'vCIDADESUF'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11CidadesId',fld:'vCIDADESID'},{av:'AV12CidadesNome',fld:'vCIDADESNOME'},{av:'AV13CidadesUF',fld:'vCIDADESUF'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV18Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11CidadesId',fld:'vCIDADESID'},{av:'AV12CidadesNome',fld:'vCIDADESNOME'},{av:'AV13CidadesUF',fld:'vCIDADESUF'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.EvtParms["'NOVO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV11CidadesId',fld:'vCIDADESID'},{av:'AV12CidadesNome',fld:'vCIDADESNOME'},{av:'AV13CidadesUF',fld:'vCIDADESUF'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setVCMap("AV15PCidadesId", "vPCIDADESID", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[56]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacidades());
