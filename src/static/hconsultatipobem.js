/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:15:2.72
*/
gx.evt.autoSkip = false;
gx.define('hconsultatipobem', false, function () {
   this.ServerClass =  "hconsultatipobem" ;
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
      this.A2036TipoBemSnImobilizado=gx.fn.getControlValue("TIPOBEMSNIMOBILIZADO") ;
      this.AV15OutTipoBemId=gx.fn.getIntegerValue("vOUTTIPOBEMID",'.') ;
   };
   this.Validv_Tipobemsnimobilizado=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vTIPOBEMSNIMOBILIZADO");
         this.AnyError  = 0;
         if ( ! ( this.AV18TipoBemSnImobilizado == "N" || this.AV18TipoBemSnImobilizado == "S" || (""==this.AV18TipoBemSnImobilizado) ) )
         {
            try {
               gxballoon.setError("Campo TipoBemSnImobilizado fora do intervalo");
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
   this.e17c52_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11c52_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12c52_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13c52_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14c52_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15c52_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20c52_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21c51_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,22,28,29,30,31,32,33,39,42,44,46,48,50,51,52,53];
   this.GXLastCtrlId =53;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",27,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultatipobem",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2034,28,"TIPOBEMID","","","TipoBemId","int",0,"px",4,4,"right",null,[],2034,"TipoBemId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2035,29,"TIPOBEMDESCRICAO","","","TipoBemDescricao","svchar",0,"px",40,40,"left",null,[],2035,"TipoBemDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Snimobilizado",30,"vSNIMOBILIZADO","","","SnImobilizado","char",0,"px",3,3,"left",null,[],"Snimobilizado","SnImobilizado",true,0,false,false,"Attribute",1,"");
   GridContainer.addComboBox(2033,31,"TIPOBEMTPREDUCAO","","TipoBemTpReducao","char",null,0,true,false,0,"px","");
   GridContainer.addSingleLineEdit(2040,32,"TIPOBEMVIDAMINIMA","","","TipoBemVidaMinima","decimal",0,"px",5,5,"right",null,[],2040,"TipoBemVidaMinima",true,1,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2041,33,"TIPOBEMVIDAMAXIMA","","","TipoBemVidaMaxima","decimal",0,"px",5,5,"right",null,[],2041,"TipoBemVidaMaxima",true,1,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOBEMID",gxz:"ZV16TipoBemId",gxold:"OV16TipoBemId",gxvar:"AV16TipoBemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16TipoBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16TipoBemId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vTIPOBEMID",gx.O.AV16TipoBemId,0)},c2v:function(){gx.O.AV16TipoBemId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vTIPOBEMID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOBEMDESCRICAO",gxz:"ZV17TipoBemDescricao",gxold:"OV17TipoBemDescricao",gxvar:"AV17TipoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17TipoBemDescricao=Value},v2z:function(Value){gx.O.ZV17TipoBemDescricao=Value},v2c:function(){gx.fn.setControlValue("vTIPOBEMDESCRICAO",gx.O.AV17TipoBemDescricao,0)},c2v:function(){gx.O.AV17TipoBemDescricao=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBEMDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[22]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Tipobemsnimobilizado,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOBEMSNIMOBILIZADO",gxz:"ZV18TipoBemSnImobilizado",gxold:"OV18TipoBemSnImobilizado",gxvar:"AV18TipoBemSnImobilizado",ucs:[],op:[22],ip:[22],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV18TipoBemSnImobilizado=Value},v2z:function(Value){gx.O.ZV18TipoBemSnImobilizado=Value},v2c:function(){gx.fn.setCheckBoxValue("vTIPOBEMSNIMOBILIZADO",gx.O.AV18TipoBemSnImobilizado,"S")},c2v:function(){gx.O.AV18TipoBemSnImobilizado=this.val()},val:function(){return gx.fn.getControlValue("vTIPOBEMSNIMOBILIZADO")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[28]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMID",gxz:"Z2034TipoBemId",gxold:"O2034TipoBemId",gxvar:"A2034TipoBemId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2034TipoBemId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2034TipoBemId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOBEMID",row || gx.fn.currentGridRowImpl(27),gx.O.A2034TipoBemId,0)},c2v:function(){gx.O.A2034TipoBemId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOBEMID",row || gx.fn.currentGridRowImpl(27),'.')},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMDESCRICAO",gxz:"Z2035TipoBemDescricao",gxold:"O2035TipoBemDescricao",gxvar:"A2035TipoBemDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2035TipoBemDescricao=Value},v2z:function(Value){gx.O.Z2035TipoBemDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOBEMDESCRICAO",row || gx.fn.currentGridRowImpl(27),gx.O.A2035TipoBemDescricao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2035TipoBemDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBEMDESCRICAO",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"char",len:3,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSNIMOBILIZADO",gxz:"ZV19SnImobilizado",gxold:"OV19SnImobilizado",gxvar:"AV19SnImobilizado",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV19SnImobilizado=Value},v2z:function(Value){gx.O.ZV19SnImobilizado=Value},v2c:function(row){gx.fn.setGridControlValue("vSNIMOBILIZADO",row || gx.fn.currentGridRowImpl(27),gx.O.AV19SnImobilizado,0)},c2v:function(){gx.O.AV19SnImobilizado=this.val()},val:function(row){return gx.fn.getGridControlValue("vSNIMOBILIZADO",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMTPREDUCAO",gxz:"Z2033TipoBemTpReducao",gxold:"O2033TipoBemTpReducao",gxvar:"A2033TipoBemTpReducao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A2033TipoBemTpReducao=Value},v2z:function(Value){gx.O.Z2033TipoBemTpReducao=Value},v2c:function(row){gx.fn.setGridComboBoxValue("TIPOBEMTPREDUCAO",row || gx.fn.currentGridRowImpl(27),gx.O.A2033TipoBemTpReducao)},c2v:function(){gx.O.A2033TipoBemTpReducao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOBEMTPREDUCAO",row || gx.fn.currentGridRowImpl(27))},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"decimal",len:5,dec:1,sign:false,pic:"ZZ9.9",ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMVIDAMINIMA",gxz:"Z2040TipoBemVidaMinima",gxold:"O2040TipoBemVidaMinima",gxvar:"A2040TipoBemVidaMinima",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2040TipoBemVidaMinima=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2040TipoBemVidaMinima=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("TIPOBEMVIDAMINIMA",row || gx.fn.currentGridRowImpl(27),gx.O.A2040TipoBemVidaMinima,1,',')},c2v:function(){gx.O.A2040TipoBemVidaMinima=this.val()},val:function(row){return gx.fn.getGridDecimalValue("TIPOBEMVIDAMINIMA",row || gx.fn.currentGridRowImpl(27),'.',',')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"decimal",len:5,dec:1,sign:false,pic:"ZZ9.9",ro:1,isacc:0,grid:27,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"TIPOBEMVIDAMAXIMA",gxz:"Z2041TipoBemVidaMaxima",gxold:"O2041TipoBemVidaMaxima",gxvar:"A2041TipoBemVidaMaxima",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2041TipoBemVidaMaxima=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z2041TipoBemVidaMaxima=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(row){gx.fn.setGridDecimalValue("TIPOBEMVIDAMAXIMA",row || gx.fn.currentGridRowImpl(27),gx.O.A2041TipoBemVidaMaxima,1,',')},c2v:function(){gx.O.A2041TipoBemVidaMaxima=this.val()},val:function(row){return gx.fn.getGridDecimalValue("TIPOBEMVIDAMAXIMA",row || gx.fn.currentGridRowImpl(27),'.',',')},nac:gx.falseFn};
   GXValidFnc[39]={fld:"TABLENAV",grid:0};
   GXValidFnc[42]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[44]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[46]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[48]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[50]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV21Pagina",gxold:"OV21Pagina",gxvar:"AV21Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV21Pagina)},c2v:function(){gx.O.AV21Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[52]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV22PaginaAux",gxold:"OV22PaginaAux",gxvar:"AV22PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV22PaginaAux,0)},c2v:function(){gx.O.AV22PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[53]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16TipoBemId = 0 ;
   this.ZV16TipoBemId = 0 ;
   this.OV16TipoBemId = 0 ;
   this.AV17TipoBemDescricao = "" ;
   this.ZV17TipoBemDescricao = "" ;
   this.OV17TipoBemDescricao = "" ;
   this.AV18TipoBemSnImobilizado = "" ;
   this.ZV18TipoBemSnImobilizado = "" ;
   this.OV18TipoBemSnImobilizado = "" ;
   this.Z2034TipoBemId = 0 ;
   this.O2034TipoBemId = 0 ;
   this.Z2035TipoBemDescricao = "" ;
   this.O2035TipoBemDescricao = "" ;
   this.ZV19SnImobilizado = "" ;
   this.OV19SnImobilizado = "" ;
   this.Z2033TipoBemTpReducao = "" ;
   this.O2033TipoBemTpReducao = "" ;
   this.Z2040TipoBemVidaMinima = 0 ;
   this.O2040TipoBemVidaMinima = 0 ;
   this.Z2041TipoBemVidaMaxima = 0 ;
   this.O2041TipoBemVidaMaxima = 0 ;
   this.AV21Pagina = 0 ;
   this.ZV21Pagina = 0 ;
   this.OV21Pagina = 0 ;
   this.AV22PaginaAux = 0 ;
   this.ZV22PaginaAux = 0 ;
   this.OV22PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16TipoBemId = 0 ;
   this.AV17TipoBemDescricao = "" ;
   this.AV18TipoBemSnImobilizado = "" ;
   this.AV21Pagina = 0 ;
   this.AV22PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV15OutTipoBemId = 0 ;
   this.A2036TipoBemSnImobilizado = "" ;
   this.A2072TipoBemEmpresaId = "" ;
   this.A2034TipoBemId = 0 ;
   this.A2035TipoBemDescricao = "" ;
   this.AV19SnImobilizado = "" ;
   this.A2033TipoBemTpReducao = "" ;
   this.A2040TipoBemVidaMinima = 0 ;
   this.A2041TipoBemVidaMaxima = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17c52_client": ["ENTER", true] ,"e11c52_client": ["'GXM_FIRST'", true] ,"e12c52_client": ["'GXM_PREVIOUS'", true] ,"e13c52_client": ["'GXM_NEXT'", true] ,"e14c52_client": ["'GXM_LAST'", true] ,"e15c52_client": ["'PROCURAR'", true] ,"e20c52_client": ["'ATUALIZAPAGINA'", true] ,"e21c51_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TipoBemId',fld:'vTIPOBEMID'},{av:'AV17TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV18TipoBemSnImobilizado',fld:'vTIPOBEMSNIMOBILIZADO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'TIPOBEMID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOBEMID","Title")',ctrl:'TIPOBEMID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'TIPOBEMDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOBEMDESCRICAO","Title")',ctrl:'TIPOBEMDESCRICAO',prop:'Title'},{ctrl:'vSNIMOBILIZADO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vSNIMOBILIZADO","Title")',ctrl:'vSNIMOBILIZADO',prop:'Title'},{ctrl:'TIPOBEMTPREDUCAO'},{ctrl:'TIPOBEMVIDAMINIMA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOBEMVIDAMINIMA","Title")',ctrl:'TIPOBEMVIDAMINIMA',prop:'Title'},{ctrl:'TIPOBEMVIDAMAXIMA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("TIPOBEMVIDAMAXIMA","Title")',ctrl:'TIPOBEMVIDAMAXIMA',prop:'Title'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV20NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A2034TipoBemId',fld:'TIPOBEMID'}],[{av:'AV15OutTipoBemId',fld:'vOUTTIPOBEMID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TipoBemId',fld:'vTIPOBEMID'},{av:'AV17TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV18TipoBemSnImobilizado',fld:'vTIPOBEMSNIMOBILIZADO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TipoBemId',fld:'vTIPOBEMID'},{av:'AV17TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV18TipoBemSnImobilizado',fld:'vTIPOBEMSNIMOBILIZADO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'},{av:'AV21Pagina',fld:'vPAGINA'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TipoBemId',fld:'vTIPOBEMID'},{av:'AV17TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV18TipoBemSnImobilizado',fld:'vTIPOBEMSNIMOBILIZADO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TipoBemId',fld:'vTIPOBEMID'},{av:'AV17TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV18TipoBemSnImobilizado',fld:'vTIPOBEMSNIMOBILIZADO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TipoBemId',fld:'vTIPOBEMID'},{av:'AV17TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV18TipoBemSnImobilizado',fld:'vTIPOBEMSNIMOBILIZADO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["LOAD"] = [[{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'}],[{av:'AV19SnImobilizado',fld:'vSNIMOBILIZADO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16TipoBemId',fld:'vTIPOBEMID'},{av:'AV17TipoBemDescricao',fld:'vTIPOBEMDESCRICAO'},{av:'AV18TipoBemSnImobilizado',fld:'vTIPOBEMSNIMOBILIZADO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A2036TipoBemSnImobilizado',fld:'TIPOBEMSNIMOBILIZADO'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2036TipoBemSnImobilizado", "TIPOBEMSNIMOBILIZADO", 0, "char");
   this.setVCMap("AV15OutTipoBemId", "vOUTTIPOBEMID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A2036TipoBemSnImobilizado", "TIPOBEMSNIMOBILIZADO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[53]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A2036TipoBemSnImobilizado"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultatipobem());
