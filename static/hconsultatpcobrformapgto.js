/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:58:47.21
*/
gx.evt.autoSkip = false;
gx.define('hconsultatpcobrformapgto', false, function () {
   this.ServerClass =  "hconsultatpcobrformapgto" ;
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
      this.AV12EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV17PFormaPgtoId=gx.fn.getIntegerValue("vPFORMAPGTOID",'.') ;
      this.AV16PTpCobrFormaPgtoId=gx.fn.getIntegerValue("vPTPCOBRFORMAPGTOID",'.') ;
   };
   this.Validv_Formapgtoid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vFORMAPGTOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e17nu2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11nu2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12nu2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13nu2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14nu2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15nu2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19nu2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21nu1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,30,31,32,33,34,40,43,45,47,49,51,52,53,54];
   this.GXLastCtrlId =54;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",29,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatpcobrformapgto",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3377,30,"TPCOBRFORMAPGTOID","","","TpCobrFormaPgtoId","int",0,"px",3,3,"right",null,[],3377,"TpCobrFormaPgtoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3797,31,"TPCOBRFORMAPGTODESCRICAO","","","TpCobrFormaPgtoDescricao","svchar",0,"px",25,25,"left",null,[],3797,"TpCobrFormaPgtoDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4094,32,"TPCOBRFORMAPGTOQTDEPARCELA","","","TpCobrFormaPgtoQtdeParcela","int",0,"px",3,3,"right",null,[],4094,"TpCobrFormaPgtoQtdeParcela",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4095,33,"TPCOBRFORMAPGTOQTDEDIAPRIPAR","","","TpCobrFormaPgtoQtdeDiaPriPar","int",0,"px",3,3,"right",null,[],4095,"TpCobrFormaPgtoQtdeDiaPriPar",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4096,34,"TPCOBRFORMAPGTOQTDEDIAENTREPAR","","","TpCobrFormaPgtoQtdeDiaEntrePar","int",0,"px",3,3,"right",null,[],4096,"TpCobrFormaPgtoQtdeDiaEntrePar",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Formapgtoid,isvalid:null,rgrid:[this.GridContainer],fld:"vFORMAPGTOID",gxz:"ZV20FormaPgtoId",gxold:"OV20FormaPgtoId",gxvar:"AV20FormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20FormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV20FormaPgtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vFORMAPGTOID",gx.O.AV20FormaPgtoId,0)},c2v:function(){gx.O.AV20FormaPgtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vFORMAPGTOID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vFORMAPGTODESCRICAO",gxz:"ZV21FormaPgtoDescricao",gxold:"OV21FormaPgtoDescricao",gxvar:"AV21FormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV21FormaPgtoDescricao=Value},v2z:function(Value){gx.O.ZV21FormaPgtoDescricao=Value},v2c:function(){gx.fn.setControlValue("vFORMAPGTODESCRICAO",gx.O.AV21FormaPgtoDescricao,0)},c2v:function(){gx.O.AV21FormaPgtoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vFORMAPGTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTPCOBRFORMAPGTOID",gxz:"ZV18TpCobrFormaPgtoId",gxold:"OV18TpCobrFormaPgtoId",gxvar:"AV18TpCobrFormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18TpCobrFormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV18TpCobrFormaPgtoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTPCOBRFORMAPGTOID",gx.O.AV18TpCobrFormaPgtoId,0)},c2v:function(){gx.O.AV18TpCobrFormaPgtoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTPCOBRFORMAPGTOID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTPCOBRFORMAPGTODESCRICAO",gxz:"ZV19TpCobrFormaPgtoDescricao",gxold:"OV19TpCobrFormaPgtoDescricao",gxvar:"AV19TpCobrFormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19TpCobrFormaPgtoDescricao=Value},v2z:function(Value){gx.O.ZV19TpCobrFormaPgtoDescricao=Value},v2c:function(){gx.fn.setControlValue("vTPCOBRFORMAPGTODESCRICAO",gx.O.AV19TpCobrFormaPgtoDescricao,0)},c2v:function(){gx.O.AV19TpCobrFormaPgtoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTPCOBRFORMAPGTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TPCOBRFORMAPGTOID",gxz:"Z3377TpCobrFormaPgtoId",gxold:"O3377TpCobrFormaPgtoId",gxvar:"A3377TpCobrFormaPgtoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3377TpCobrFormaPgtoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3377TpCobrFormaPgtoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TPCOBRFORMAPGTOID",row || gx.fn.currentGridRowImpl(29),gx.O.A3377TpCobrFormaPgtoId,0)},c2v:function(){gx.O.A3377TpCobrFormaPgtoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TPCOBRFORMAPGTOID",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TPCOBRFORMAPGTODESCRICAO",gxz:"Z3797TpCobrFormaPgtoDescricao",gxold:"O3797TpCobrFormaPgtoDescricao",gxvar:"A3797TpCobrFormaPgtoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3797TpCobrFormaPgtoDescricao=Value},v2z:function(Value){gx.O.Z3797TpCobrFormaPgtoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TPCOBRFORMAPGTODESCRICAO",row || gx.fn.currentGridRowImpl(29),gx.O.A3797TpCobrFormaPgtoDescricao,0)},c2v:function(){gx.O.A3797TpCobrFormaPgtoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TPCOBRFORMAPGTODESCRICAO",row || gx.fn.currentGridRowImpl(29))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TPCOBRFORMAPGTOQTDEPARCELA",gxz:"Z4094TpCobrFormaPgtoQtdeParcela",gxold:"O4094TpCobrFormaPgtoQtdeParcela",gxvar:"A4094TpCobrFormaPgtoQtdeParcela",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4094TpCobrFormaPgtoQtdeParcela=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4094TpCobrFormaPgtoQtdeParcela=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TPCOBRFORMAPGTOQTDEPARCELA",row || gx.fn.currentGridRowImpl(29),gx.O.A4094TpCobrFormaPgtoQtdeParcela,0)},c2v:function(){gx.O.A4094TpCobrFormaPgtoQtdeParcela=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TPCOBRFORMAPGTOQTDEPARCELA",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TPCOBRFORMAPGTOQTDEDIAPRIPAR",gxz:"Z4095TpCobrFormaPgtoQtdeDiaPriPar",gxold:"O4095TpCobrFormaPgtoQtdeDiaPriPar",gxvar:"A4095TpCobrFormaPgtoQtdeDiaPriPar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4095TpCobrFormaPgtoQtdeDiaPriPar=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4095TpCobrFormaPgtoQtdeDiaPriPar=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TPCOBRFORMAPGTOQTDEDIAPRIPAR",row || gx.fn.currentGridRowImpl(29),gx.O.A4095TpCobrFormaPgtoQtdeDiaPriPar,0)},c2v:function(){gx.O.A4095TpCobrFormaPgtoQtdeDiaPriPar=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TPCOBRFORMAPGTOQTDEDIAPRIPAR",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:29,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TPCOBRFORMAPGTOQTDEDIAENTREPAR",gxz:"Z4096TpCobrFormaPgtoQtdeDiaEntrePar",gxold:"O4096TpCobrFormaPgtoQtdeDiaEntrePar",gxvar:"A4096TpCobrFormaPgtoQtdeDiaEntrePar",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4096TpCobrFormaPgtoQtdeDiaEntrePar=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4096TpCobrFormaPgtoQtdeDiaEntrePar=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TPCOBRFORMAPGTOQTDEDIAENTREPAR",row || gx.fn.currentGridRowImpl(29),gx.O.A4096TpCobrFormaPgtoQtdeDiaEntrePar,0)},c2v:function(){gx.O.A4096TpCobrFormaPgtoQtdeDiaEntrePar=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TPCOBRFORMAPGTOQTDEDIAENTREPAR",row || gx.fn.currentGridRowImpl(29),'.')},nac:gx.falseFn};
   GXValidFnc[40]={fld:"TABLENAV",grid:0};
   GXValidFnc[43]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[45]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[47]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[49]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[51]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV23Pagina",gxold:"OV23Pagina",gxvar:"AV23Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV23Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV23Pagina)},c2v:function(){gx.O.AV23Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV24PaginaAux",gxold:"OV24PaginaAux",gxvar:"AV24PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV24PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV24PaginaAux,0)},c2v:function(){gx.O.AV24PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV20FormaPgtoId = 0 ;
   this.ZV20FormaPgtoId = 0 ;
   this.OV20FormaPgtoId = 0 ;
   this.AV21FormaPgtoDescricao = "" ;
   this.ZV21FormaPgtoDescricao = "" ;
   this.OV21FormaPgtoDescricao = "" ;
   this.AV18TpCobrFormaPgtoId = 0 ;
   this.ZV18TpCobrFormaPgtoId = 0 ;
   this.OV18TpCobrFormaPgtoId = 0 ;
   this.AV19TpCobrFormaPgtoDescricao = "" ;
   this.ZV19TpCobrFormaPgtoDescricao = "" ;
   this.OV19TpCobrFormaPgtoDescricao = "" ;
   this.Z3377TpCobrFormaPgtoId = 0 ;
   this.O3377TpCobrFormaPgtoId = 0 ;
   this.Z3797TpCobrFormaPgtoDescricao = "" ;
   this.O3797TpCobrFormaPgtoDescricao = "" ;
   this.Z4094TpCobrFormaPgtoQtdeParcela = 0 ;
   this.O4094TpCobrFormaPgtoQtdeParcela = 0 ;
   this.Z4095TpCobrFormaPgtoQtdeDiaPriPar = 0 ;
   this.O4095TpCobrFormaPgtoQtdeDiaPriPar = 0 ;
   this.Z4096TpCobrFormaPgtoQtdeDiaEntrePar = 0 ;
   this.O4096TpCobrFormaPgtoQtdeDiaEntrePar = 0 ;
   this.AV23Pagina = 0 ;
   this.ZV23Pagina = 0 ;
   this.OV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.ZV24PaginaAux = 0 ;
   this.OV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV20FormaPgtoId = 0 ;
   this.AV21FormaPgtoDescricao = "" ;
   this.AV18TpCobrFormaPgtoId = 0 ;
   this.AV19TpCobrFormaPgtoDescricao = "" ;
   this.AV23Pagina = 0 ;
   this.AV24PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17PFormaPgtoId = 0 ;
   this.AV16PTpCobrFormaPgtoId = 0 ;
   this.A3375FormaPgtoEmpresaId = "" ;
   this.A3376FormaPgtoId = 0 ;
   this.A3377TpCobrFormaPgtoId = 0 ;
   this.A3797TpCobrFormaPgtoDescricao = "" ;
   this.A4094TpCobrFormaPgtoQtdeParcela = 0 ;
   this.A4095TpCobrFormaPgtoQtdeDiaPriPar = 0 ;
   this.A4096TpCobrFormaPgtoQtdeDiaEntrePar = 0 ;
   this.A3489FormaPgtoDescricao = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17nu2_client": ["ENTER", true] ,"e11nu2_client": ["'GXM_FIRST'", true] ,"e12nu2_client": ["'GXM_PREVIOUS'", true] ,"e13nu2_client": ["'GXM_NEXT'", true] ,"e14nu2_client": ["'GXM_LAST'", true] ,"e15nu2_client": ["'PROCURAR'", true] ,"e19nu2_client": ["'ATUALIZAPAGINA'", true] ,"e21nu1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV18TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV19TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TPCOBRFORMAPGTOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TPCOBRFORMAPGTOID","Title")',ctrl:'TPCOBRFORMAPGTOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TPCOBRFORMAPGTODESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TPCOBRFORMAPGTODESCRICAO","Title")',ctrl:'TPCOBRFORMAPGTODESCRICAO',prop:'Title'},{ctrl:'TPCOBRFORMAPGTOQTDEPARCELA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TPCOBRFORMAPGTOQTDEPARCELA","Title")',ctrl:'TPCOBRFORMAPGTOQTDEPARCELA',prop:'Title'},{ctrl:'TPCOBRFORMAPGTOQTDEDIAPRIPAR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TPCOBRFORMAPGTOQTDEDIAPRIPAR","Title")',ctrl:'TPCOBRFORMAPGTOQTDEDIAPRIPAR',prop:'Title'},{ctrl:'TPCOBRFORMAPGTOQTDEDIAENTREPAR',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TPCOBRFORMAPGTOQTDEDIAENTREPAR","Title")',ctrl:'TPCOBRFORMAPGTOQTDEDIAENTREPAR',prop:'Title'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV22NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3377TpCobrFormaPgtoId',fld:'TPCOBRFORMAPGTOID'}],[{av:'AV16PTpCobrFormaPgtoId',fld:'vPTPCOBRFORMAPGTOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV18TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV19TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV18TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV19TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23Pagina',fld:'vPAGINA'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV18TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV19TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV23Pagina',fld:'vPAGINA'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV18TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV19TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV24PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV18TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV19TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV20FormaPgtoId',fld:'vFORMAPGTOID'},{av:'AV18TpCobrFormaPgtoId',fld:'vTPCOBRFORMAPGTOID'},{av:'AV19TpCobrFormaPgtoDescricao',fld:'vTPCOBRFORMAPGTODESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV17PFormaPgtoId", "vPFORMAPGTOID", 0, "int");
   this.setVCMap("AV16PTpCobrFormaPgtoId", "vPTPCOBRFORMAPGTOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[54]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatpcobrformapgto());
