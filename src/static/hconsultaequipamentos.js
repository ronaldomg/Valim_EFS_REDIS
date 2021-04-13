/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 14:31:23.83
*/
gx.evt.autoSkip = false;
gx.define('hconsultaequipamentos', false, function () {
   this.ServerClass =  "hconsultaequipamentos" ;
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
      this.AV24EquipamentoNumeroLojaOut=gx.fn.getIntegerValue("vEQUIPAMENTONUMEROLOJAOUT",'.') ;
      this.AV25EquipamentoSequenciaECFOut=gx.fn.getIntegerValue("vEQUIPAMENTOSEQUENCIAECFOUT",'.') ;
      this.AV20EquipamentoNumeroLojaIn=gx.fn.getIntegerValue("vEQUIPAMENTONUMEROLOJAIN",'.') ;
   };
   this.e17y72_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11y72_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12y72_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13y72_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14y72_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15y72_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e19y72_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21y71_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,26,32,33,34,35,36,42,45,47,49,51,53,54,55,56];
   this.GXLastCtrlId =56;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaequipamentos",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(6532,32,"EQUIPAMENTONUMEROLOJA","","","EquipamentoNumeroLoja","int",0,"px",4,4,"right",null,[],6532,"EquipamentoNumeroLoja",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(6533,33,"EQUIPAMENTOSEQUENCIAECF","","","EquipamentoSequenciaECF","int",0,"px",3,3,"right",null,[],6533,"EquipamentoSequenciaECF",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(6528,34,"EQUIPAMENTOMODELOECF","","","EquipamentoModeloECF","svchar",0,"px",20,20,"left",null,[],6528,"EquipamentoModeloECF",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(6524,35,"EQUIPAMENTONUMEROSERIE","","","EquipamentoNumeroSerie","svchar",0,"px",20,20,"left",null,[],6524,"EquipamentoNumeroSerie",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(6526,36,"EQUIPAMENTONUMEROUSUARIOECF","","","EquipamentoNumeroUsuarioECF","int",0,"px",10,10,"right",null,[],6526,"EquipamentoNumeroUsuarioECF",true,0,false,false,"SemQuebraGrid",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEQUIPAMENTONUMEROLOJA",gxz:"ZV16EquipamentoNumeroLoja",gxold:"OV16EquipamentoNumeroLoja",gxvar:"AV16EquipamentoNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16EquipamentoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16EquipamentoNumeroLoja=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEQUIPAMENTONUMEROLOJA",gx.O.AV16EquipamentoNumeroLoja,0)},c2v:function(){gx.O.AV16EquipamentoNumeroLoja=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEQUIPAMENTONUMEROLOJA",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEQUIPAMENTOMODELOECF",gxz:"ZV18EquipamentoModeloECF",gxold:"OV18EquipamentoModeloECF",gxvar:"AV18EquipamentoModeloECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18EquipamentoModeloECF=Value},v2z:function(Value){gx.O.ZV18EquipamentoModeloECF=Value},v2c:function(){gx.fn.setControlValue("vEQUIPAMENTOMODELOECF",gx.O.AV18EquipamentoModeloECF,0)},c2v:function(){gx.O.AV18EquipamentoModeloECF=this.val()},val:function(){return gx.fn.getControlValue("vEQUIPAMENTOMODELOECF")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEQUIPAMENTOSEQUENCIAECF",gxz:"ZV17EquipamentoSequenciaECF",gxold:"OV17EquipamentoSequenciaECF",gxvar:"AV17EquipamentoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17EquipamentoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17EquipamentoSequenciaECF=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vEQUIPAMENTOSEQUENCIAECF",gx.O.AV17EquipamentoSequenciaECF,0)},c2v:function(){gx.O.AV17EquipamentoSequenciaECF=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vEQUIPAMENTOSEQUENCIAECF",'.')},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vEQUIPAMENTONUMEROSERIE",gxz:"ZV19EquipamentoNumeroSerie",gxold:"OV19EquipamentoNumeroSerie",gxvar:"AV19EquipamentoNumeroSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19EquipamentoNumeroSerie=Value},v2z:function(Value){gx.O.ZV19EquipamentoNumeroSerie=Value},v2c:function(){gx.fn.setControlValue("vEQUIPAMENTONUMEROSERIE",gx.O.AV19EquipamentoNumeroSerie,0)},c2v:function(){gx.O.AV19EquipamentoNumeroSerie=this.val()},val:function(){return gx.fn.getControlValue("vEQUIPAMENTONUMEROSERIE")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EQUIPAMENTONUMEROLOJA",gxz:"Z6532EquipamentoNumeroLoja",gxold:"O6532EquipamentoNumeroLoja",gxvar:"A6532EquipamentoNumeroLoja",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6532EquipamentoNumeroLoja=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6532EquipamentoNumeroLoja=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("EQUIPAMENTONUMEROLOJA",row || gx.fn.currentGridRowImpl(31),gx.O.A6532EquipamentoNumeroLoja,0)},c2v:function(){gx.O.A6532EquipamentoNumeroLoja=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("EQUIPAMENTONUMEROLOJA",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"int",len:3,dec:0,sign:false,pic:"ZZ9",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EQUIPAMENTOSEQUENCIAECF",gxz:"Z6533EquipamentoSequenciaECF",gxold:"O6533EquipamentoSequenciaECF",gxvar:"A6533EquipamentoSequenciaECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6533EquipamentoSequenciaECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6533EquipamentoSequenciaECF=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("EQUIPAMENTOSEQUENCIAECF",row || gx.fn.currentGridRowImpl(31),gx.O.A6533EquipamentoSequenciaECF,0)},c2v:function(){gx.O.A6533EquipamentoSequenciaECF=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("EQUIPAMENTOSEQUENCIAECF",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EQUIPAMENTOMODELOECF",gxz:"Z6528EquipamentoModeloECF",gxold:"O6528EquipamentoModeloECF",gxvar:"A6528EquipamentoModeloECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6528EquipamentoModeloECF=Value},v2z:function(Value){gx.O.Z6528EquipamentoModeloECF=Value},v2c:function(row){gx.fn.setGridControlValue("EQUIPAMENTOMODELOECF",row || gx.fn.currentGridRowImpl(31),gx.O.A6528EquipamentoModeloECF,0)},c2v:function(){gx.O.A6528EquipamentoModeloECF=this.val()},val:function(row){return gx.fn.getGridControlValue("EQUIPAMENTOMODELOECF",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EQUIPAMENTONUMEROSERIE",gxz:"Z6524EquipamentoNumeroSerie",gxold:"O6524EquipamentoNumeroSerie",gxvar:"A6524EquipamentoNumeroSerie",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A6524EquipamentoNumeroSerie=Value},v2z:function(Value){gx.O.Z6524EquipamentoNumeroSerie=Value},v2c:function(row){gx.fn.setGridControlValue("EQUIPAMENTONUMEROSERIE",row || gx.fn.currentGridRowImpl(31),gx.O.A6524EquipamentoNumeroSerie,0)},c2v:function(){gx.O.A6524EquipamentoNumeroSerie=this.val()},val:function(row){return gx.fn.getGridControlValue("EQUIPAMENTONUMEROSERIE",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"EQUIPAMENTONUMEROUSUARIOECF",gxz:"Z6526EquipamentoNumeroUsuarioECF",gxold:"O6526EquipamentoNumeroUsuarioECF",gxvar:"A6526EquipamentoNumeroUsuarioECF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A6526EquipamentoNumeroUsuarioECF=gx.num.intval(Value)},v2z:function(Value){gx.O.Z6526EquipamentoNumeroUsuarioECF=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("EQUIPAMENTONUMEROUSUARIOECF",row || gx.fn.currentGridRowImpl(31),gx.O.A6526EquipamentoNumeroUsuarioECF,0)},c2v:function(){gx.O.A6526EquipamentoNumeroUsuarioECF=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("EQUIPAMENTONUMEROUSUARIOECF",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TABLENAV",grid:0};
   GXValidFnc[45]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[47]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[49]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[51]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[53]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[54]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV22PaginaAux",gxold:"OV22PaginaAux",gxvar:"AV22PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV22PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV22PaginaAux,0)},c2v:function(){gx.O.AV22PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV21Pagina",gxold:"OV21Pagina",gxvar:"AV21Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV21Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV21Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV21Pagina)},c2v:function(){gx.O.AV21Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16EquipamentoNumeroLoja = 0 ;
   this.ZV16EquipamentoNumeroLoja = 0 ;
   this.OV16EquipamentoNumeroLoja = 0 ;
   this.AV18EquipamentoModeloECF = "" ;
   this.ZV18EquipamentoModeloECF = "" ;
   this.OV18EquipamentoModeloECF = "" ;
   this.AV17EquipamentoSequenciaECF = 0 ;
   this.ZV17EquipamentoSequenciaECF = 0 ;
   this.OV17EquipamentoSequenciaECF = 0 ;
   this.AV19EquipamentoNumeroSerie = "" ;
   this.ZV19EquipamentoNumeroSerie = "" ;
   this.OV19EquipamentoNumeroSerie = "" ;
   this.Z6532EquipamentoNumeroLoja = 0 ;
   this.O6532EquipamentoNumeroLoja = 0 ;
   this.Z6533EquipamentoSequenciaECF = 0 ;
   this.O6533EquipamentoSequenciaECF = 0 ;
   this.Z6528EquipamentoModeloECF = "" ;
   this.O6528EquipamentoModeloECF = "" ;
   this.Z6524EquipamentoNumeroSerie = "" ;
   this.O6524EquipamentoNumeroSerie = "" ;
   this.Z6526EquipamentoNumeroUsuarioECF = 0 ;
   this.O6526EquipamentoNumeroUsuarioECF = 0 ;
   this.AV22PaginaAux = 0 ;
   this.ZV22PaginaAux = 0 ;
   this.OV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.ZV21Pagina = 0 ;
   this.OV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16EquipamentoNumeroLoja = 0 ;
   this.AV18EquipamentoModeloECF = "" ;
   this.AV17EquipamentoSequenciaECF = 0 ;
   this.AV19EquipamentoNumeroSerie = "" ;
   this.AV22PaginaAux = 0 ;
   this.AV21Pagina = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV24EquipamentoNumeroLojaOut = 0 ;
   this.AV25EquipamentoSequenciaECFOut = 0 ;
   this.AV20EquipamentoNumeroLojaIn = 0 ;
   this.A6532EquipamentoNumeroLoja = 0 ;
   this.A6533EquipamentoSequenciaECF = 0 ;
   this.A6528EquipamentoModeloECF = "" ;
   this.A6524EquipamentoNumeroSerie = "" ;
   this.A6526EquipamentoNumeroUsuarioECF = 0 ;
   this.Events = {"e17y72_client": ["ENTER", true] ,"e11y72_client": ["'GXM_FIRST'", true] ,"e12y72_client": ["'GXM_PREVIOUS'", true] ,"e13y72_client": ["'GXM_NEXT'", true] ,"e14y72_client": ["'GXM_LAST'", true] ,"e15y72_client": ["'PROCURAR'", true] ,"e19y72_client": ["'ATUALIZAPAGINA'", true] ,"e21y71_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV18EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV17EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV19EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'EQUIPAMENTONUMEROLOJA',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EQUIPAMENTONUMEROLOJA","Title")',ctrl:'EQUIPAMENTONUMEROLOJA',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'EQUIPAMENTOSEQUENCIAECF',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EQUIPAMENTOSEQUENCIAECF","Title")',ctrl:'EQUIPAMENTOSEQUENCIAECF',prop:'Title'},{ctrl:'EQUIPAMENTOMODELOECF',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EQUIPAMENTOMODELOECF","Title")',ctrl:'EQUIPAMENTOMODELOECF',prop:'Title'},{ctrl:'EQUIPAMENTONUMEROSERIE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EQUIPAMENTONUMEROSERIE","Title")',ctrl:'EQUIPAMENTONUMEROSERIE',prop:'Title'},{ctrl:'EQUIPAMENTONUMEROUSUARIOECF',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("EQUIPAMENTONUMEROUSUARIOECF","Title")',ctrl:'EQUIPAMENTONUMEROUSUARIOECF',prop:'Title'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV23NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A6532EquipamentoNumeroLoja',fld:'EQUIPAMENTONUMEROLOJA'},{av:'A6533EquipamentoSequenciaECF',fld:'EQUIPAMENTOSEQUENCIAECF'}],[{av:'AV24EquipamentoNumeroLojaOut',fld:'vEQUIPAMENTONUMEROLOJAOUT'},{av:'AV25EquipamentoSequenciaECFOut',fld:'vEQUIPAMENTOSEQUENCIAECFOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV18EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV17EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV19EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV18EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV17EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV19EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21Pagina',fld:'vPAGINA'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV18EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV17EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV19EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV21Pagina',fld:'vPAGINA'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV18EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV17EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV19EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV18EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV17EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV19EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{av:'AV21Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16EquipamentoNumeroLoja',fld:'vEQUIPAMENTONUMEROLOJA'},{av:'AV18EquipamentoModeloECF',fld:'vEQUIPAMENTOMODELOECF'},{av:'AV17EquipamentoSequenciaECF',fld:'vEQUIPAMENTOSEQUENCIAECF'},{av:'AV19EquipamentoNumeroSerie',fld:'vEQUIPAMENTONUMEROSERIE'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[]];
   this.setVCMap("AV24EquipamentoNumeroLojaOut", "vEQUIPAMENTONUMEROLOJAOUT", 0, "int");
   this.setVCMap("AV25EquipamentoSequenciaECFOut", "vEQUIPAMENTOSEQUENCIAECFOUT", 0, "int");
   this.setVCMap("AV20EquipamentoNumeroLojaIn", "vEQUIPAMENTONUMEROLOJAIN", 0, "int");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[56]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaequipamentos());
