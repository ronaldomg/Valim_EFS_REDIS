/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:50:24.17
*/
gx.evt.autoSkip = false;
gx.define('hconsultacest', false, function () {
   this.ServerClass =  "hconsultacest" ;
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
      this.AV29CESTCodigoIN=gx.fn.getIntegerValue("vCESTCODIGOIN",'.') ;
      this.AV22SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.AV30CESTCodigoMaskSaida=gx.fn.getControlValue("vCESTCODIGOMASKSAIDA") ;
      this.AV28CESTCodigo=gx.fn.getIntegerValue("vCESTCODIGO",'.') ;
   };
   this.Valid_Cestcodigo=function()
   {
      try {
         if(  gx.fn.currentGridRowImpl(23) ===0) {
            return true;
         }
         var gxballoon = gx.util.balloon.getNew("CESTCODIGO", gx.fn.currentGridRowImpl(23));
         this.AnyError  = 0;
         this.StandaloneModal( );
         this.StandaloneNotModal( );

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e171xd2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111xd2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121xd2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131xd2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141xd2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151xd2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e201xd2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e211xd1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,33,36,38,40,42,44,45,46,47,48];
   this.GXLastCtrlId =48;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultacest",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(9590,24,"CESTCODIGOMASCARA","","","CESTCodigoMascara","svchar",0,"px",20,20,"left",null,[],9590,"CESTCodigoMascara",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Descricaocest",25,"vDESCRICAOCEST","","","DescricaoCEST","char",0,"px",50,50,"left",null,[],"Descricaocest","DescricaoCEST",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(9557,26,"CESTCODIGO","Código","","CESTCodigo","int",0,"px",7,7,"right",null,[],9557,"CESTCodigo",false,0,false,false,"ApenasLeitura",1,"");
   GridContainer.addSingleLineEdit(9589,27,"CESTDESCRICAO","Descrição","","CESTDescricao","svchar",0,"px",500,80,"left",null,[],9589,"CESTDescricao",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE5",grid:0};
   GXValidFnc[8]={fld:"TABLE6",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCESTCOD",gxz:"ZV26CESTCod",gxold:"OV26CESTCod",gxvar:"AV26CESTCod",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV26CESTCod=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26CESTCod=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCESTCOD",gx.O.AV26CESTCod,0)},c2v:function(){gx.O.AV26CESTCod=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCESTCOD",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:150,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCESTDESC",gxz:"ZV27CESTDesc",gxold:"OV27CESTDesc",gxvar:"AV27CESTDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27CESTDesc=Value},v2z:function(Value){gx.O.ZV27CESTDesc=Value},v2c:function(){gx.fn.setControlValue("vCESTDESC",gx.O.AV27CESTDesc,0)},c2v:function(){gx.O.AV27CESTDesc=this.val()},val:function(){return gx.fn.getControlValue("vCESTDESC")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CESTCODIGOMASCARA",gxz:"Z9590CESTCodigoMascara",gxold:"O9590CESTCodigoMascara",gxvar:"A9590CESTCodigoMascara",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9590CESTCodigoMascara=Value},v2z:function(Value){gx.O.Z9590CESTCodigoMascara=Value},v2c:function(row){gx.fn.setGridControlValue("CESTCODIGOMASCARA",row || gx.fn.currentGridRowImpl(23),gx.O.A9590CESTCodigoMascara,0)},c2v:function(){gx.O.A9590CESTCodigoMascara=this.val()},val:function(row){return gx.fn.getGridControlValue("CESTCODIGOMASCARA",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"char",len:50,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAOCEST",gxz:"ZV16DescricaoCEST",gxold:"OV16DescricaoCEST",gxvar:"AV16DescricaoCEST",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV16DescricaoCEST=Value},v2z:function(Value){gx.O.ZV16DescricaoCEST=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCRICAOCEST",row || gx.fn.currentGridRowImpl(23),gx.O.AV16DescricaoCEST,0)},c2v:function(){gx.O.AV16DescricaoCEST=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCRICAOCEST",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:this.Valid_Cestcodigo,isvalid:null,rgrid:[],fld:"CESTCODIGO",gxz:"Z9557CESTCodigo",gxold:"O9557CESTCodigo",gxvar:"A9557CESTCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A9557CESTCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z9557CESTCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CESTCODIGO",row || gx.fn.currentGridRowImpl(23),gx.O.A9557CESTCodigo,0)},c2v:function(){gx.O.A9557CESTCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CESTCODIGO",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"svchar",len:500,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CESTDESCRICAO",gxz:"Z9589CESTDescricao",gxold:"O9589CESTDescricao",gxvar:"A9589CESTDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A9589CESTDescricao=Value},v2z:function(Value){gx.O.Z9589CESTDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("CESTDESCRICAO",row || gx.fn.currentGridRowImpl(23),gx.O.A9589CESTDescricao,0)},c2v:function(){gx.O.A9589CESTDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("CESTDESCRICAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TABLE4",grid:0};
   GXValidFnc[36]={fld:"IMAGE1",grid:0};
   GXValidFnc[38]={fld:"IMAGE2",grid:0};
   GXValidFnc[40]={fld:"IMAGE3",grid:0};
   GXValidFnc[42]={fld:"IMAGE4",grid:0};
   GXValidFnc[44]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV24Pagina",gxold:"OV24Pagina",gxvar:"AV24Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV24Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV24Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV24Pagina)},c2v:function(){gx.O.AV24Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV25PaginaAux",gxold:"OV25PaginaAux",gxvar:"AV25PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV25PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV25PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV25PaginaAux,0)},c2v:function(){gx.O.AV25PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[47]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEMPRESAPADRAO",gxz:"ZV12EmpresaPadrao",gxold:"OV12EmpresaPadrao",gxvar:"AV12EmpresaPadrao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12EmpresaPadrao=Value},v2z:function(Value){gx.O.ZV12EmpresaPadrao=Value},v2c:function(){gx.fn.setControlValue("vEMPRESAPADRAO",gx.O.AV12EmpresaPadrao,0)},c2v:function(){gx.O.AV12EmpresaPadrao=this.val()},val:function(){return gx.fn.getControlValue("vEMPRESAPADRAO")},nac:gx.falseFn};
   GXValidFnc[48]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV26CESTCod = 0 ;
   this.ZV26CESTCod = 0 ;
   this.OV26CESTCod = 0 ;
   this.AV27CESTDesc = "" ;
   this.ZV27CESTDesc = "" ;
   this.OV27CESTDesc = "" ;
   this.Z9590CESTCodigoMascara = "" ;
   this.O9590CESTCodigoMascara = "" ;
   this.ZV16DescricaoCEST = "" ;
   this.OV16DescricaoCEST = "" ;
   this.Z9557CESTCodigo = 0 ;
   this.O9557CESTCodigo = 0 ;
   this.Z9589CESTDescricao = "" ;
   this.O9589CESTDescricao = "" ;
   this.AV24Pagina = 0 ;
   this.ZV24Pagina = 0 ;
   this.OV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.ZV25PaginaAux = 0 ;
   this.OV25PaginaAux = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.ZV12EmpresaPadrao = "" ;
   this.OV12EmpresaPadrao = "" ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV26CESTCod = 0 ;
   this.AV27CESTDesc = "" ;
   this.AV24Pagina = 0 ;
   this.AV25PaginaAux = 0 ;
   this.AV12EmpresaPadrao = "" ;
   this.AV5Orderedby = 0 ;
   this.AV30CESTCodigoMaskSaida = "" ;
   this.AV28CESTCodigo = 0 ;
   this.AV29CESTCodigoIN = 0 ;
   this.A9556CESTEmpresaId = "" ;
   this.A9590CESTCodigoMascara = "" ;
   this.AV16DescricaoCEST = "" ;
   this.A9557CESTCodigo = 0 ;
   this.A9589CESTDescricao = "" ;
   this.AV22SnParametro = "" ;
   this.Events = {"e171xd2_client": ["ENTER", true] ,"e111xd2_client": ["'GXM_FIRST'", true] ,"e121xd2_client": ["'GXM_PREVIOUS'", true] ,"e131xd2_client": ["'GXM_NEXT'", true] ,"e141xd2_client": ["'GXM_LAST'", true] ,"e151xd2_client": ["'PROCURAR'", true] ,"e201xd2_client": ["'ATUALIZAPAGINA'", true] ,"e211xd1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26CESTCod',fld:'vCESTCOD'},{av:'AV27CESTDesc',fld:'vCESTDESC'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A9589CESTDescricao',fld:'CESTDESCRICAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV29CESTCodigoIN',fld:'vCESTCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV26CESTCod',fld:'vCESTCOD'},{av:'AV27CESTDesc',fld:'vCESTDESC'},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{ctrl:'CESTCODIGOMASCARA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CESTCODIGOMASCARA","Title")',ctrl:'CESTCODIGOMASCARA',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'vDESCRICAOCEST',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vDESCRICAOCEST","Title")',ctrl:'vDESCRICAOCEST',prop:'Title'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV23NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("IMAGE2","Enabled")',ctrl:'IMAGE2',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE3","Enabled")',ctrl:'IMAGE3',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE1","Enabled")',ctrl:'IMAGE1',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("IMAGE4","Enabled")',ctrl:'IMAGE4',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A9590CESTCodigoMascara',fld:'CESTCODIGOMASCARA'},{av:'A9557CESTCodigo',fld:'CESTCODIGO'}],[{av:'AV30CESTCodigoMaskSaida',fld:'vCESTCODIGOMASKSAIDA'},{av:'AV28CESTCodigo',fld:'vCESTCODIGO'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26CESTCod',fld:'vCESTCOD'},{av:'AV27CESTDesc',fld:'vCESTDESC'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV29CESTCodigoIN',fld:'vCESTCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A9589CESTDescricao',fld:'CESTDESCRICAO'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26CESTCod',fld:'vCESTCOD'},{av:'AV27CESTDesc',fld:'vCESTDESC'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV29CESTCodigoIN',fld:'vCESTCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A9589CESTDescricao',fld:'CESTDESCRICAO'},{av:'AV24Pagina',fld:'vPAGINA'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26CESTCod',fld:'vCESTCOD'},{av:'AV27CESTDesc',fld:'vCESTDESC'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV29CESTCodigoIN',fld:'vCESTCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A9589CESTDescricao',fld:'CESTDESCRICAO'},{av:'AV24Pagina',fld:'vPAGINA'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26CESTCod',fld:'vCESTCOD'},{av:'AV27CESTDesc',fld:'vCESTDESC'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV29CESTCodigoIN',fld:'vCESTCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A9589CESTDescricao',fld:'CESTDESCRICAO'},{av:'AV25PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV24Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26CESTCod',fld:'vCESTCOD'},{av:'AV27CESTDesc',fld:'vCESTDESC'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV29CESTCodigoIN',fld:'vCESTCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A9589CESTDescricao',fld:'CESTDESCRICAO'}],[{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A9589CESTDescricao',fld:'CESTDESCRICAO'}],[{av:'AV16DescricaoCEST',fld:'vDESCRICAOCEST'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV26CESTCod',fld:'vCESTCOD'},{av:'AV27CESTDesc',fld:'vCESTDESC'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV29CESTCodigoIN',fld:'vCESTCODIGOIN',hsh:true},{av:'AV22SnParametro',fld:'vSNPARAMETRO'},{av:'A9589CESTDescricao',fld:'CESTDESCRICAO'}],[]];
   this.setVCMap("AV29CESTCodigoIN", "vCESTCODIGOIN", 0, "int");
   this.setVCMap("AV22SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV30CESTCodigoMaskSaida", "vCESTCODIGOMASKSAIDA", 0, "svchar");
   this.setVCMap("AV28CESTCodigo", "vCESTCODIGO", 0, "int");
   this.setVCMap("AV29CESTCodigoIN", "vCESTCODIGOIN", 0, "int");
   this.setVCMap("AV22SnParametro", "vSNPARAMETRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[47]);
   GridContainer.addRefreshingVar(this.GXValidFnc[48]);
   GridContainer.addRefreshingVar({rfrVar:"AV29CESTCodigoIN"});
   GridContainer.addRefreshingVar({rfrVar:"AV22SnParametro"});
   GridContainer.addRefreshingVar({rfrVar:"A9589CESTDescricao", rfrProp:"Value", gxAttId:"9589"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultacest());
