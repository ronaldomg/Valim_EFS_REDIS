/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:3:51.27
*/
gx.evt.autoSkip = false;
gx.define('hconsultaprofissional', false, function () {
   this.ServerClass =  "hconsultaprofissional" ;
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
      this.AV23ProfissionalIdIN=gx.fn.getIntegerValue("vPROFISSIONALIDIN",'.') ;
      this.AV24SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.AV17ProfissionalId2=gx.fn.getIntegerValue("vPROFISSIONALID2",'.') ;
   };
   this.e181cc2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e111cc2_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e121cc2_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e131cc2_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e141cc2_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e151cc2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e201cc2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e161cc2_client=function()
   {
      this.executeServerEvent("'FECHAR'", true, null, false, false);
   };
   this.e221cc2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e231cc2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,24,25,26,27,28,29,30,31,37,40,42,44,46,48,49,50,51];
   this.GXLastCtrlId =51;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",23,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaprofissional",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8566,24,"PROFISSIONALID","","","ProfissionalId","int",0,"px",4,4,"right",null,[],8566,"ProfissionalId",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8608,25,"PROFISSIONALNOME","","","ProfissionalNome","svchar",0,"px",40,40,"left",null,[],8608,"ProfissionalNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8609,26,"PROFISSIONALDATANAS","","","ProfissionalDataNas","date",0,"px",10,10,"right",null,[],8609,"ProfissionalDataNas",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8610,27,"PROFISSIONALCPF","","","ProfissionalCPF","char",0,"px",14,14,"left",null,[],8610,"ProfissionalCPF",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8611,28,"PROFISSIONALFUNCAO","","","ProfissionalFuncao","svchar",0,"px",20,20,"left",null,[],8611,"ProfissionalFuncao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Situacao","vSITUACAO",29,0,"px",17,"px",null,"","Situação","Image","");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",30,0,"px",17,"px","e201cc2_client","","Alterar","Image","");
   GridContainer.addSingleLineEdit(8922,31,"SITUACAOPROFISSIONAL","Situacao Profissional","","SituacaoProfissional","char",0,"px",1,1,"left",null,[],8922,"SituacaoProfissional",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE3",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROFISSIONALID1",gxz:"ZV16ProfissionalId1",gxold:"OV16ProfissionalId1",gxvar:"AV16ProfissionalId1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ProfissionalId1=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16ProfissionalId1=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROFISSIONALID1",gx.O.AV16ProfissionalId1,0)},c2v:function(){gx.O.AV16ProfissionalId1=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROFISSIONALID1",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROFISSIONALNOME1",gxz:"ZV19ProfissionalNome1",gxold:"OV19ProfissionalNome1",gxvar:"AV19ProfissionalNome1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ProfissionalNome1=Value},v2z:function(Value){gx.O.ZV19ProfissionalNome1=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALNOME1",gx.O.AV19ProfissionalNome1,0)},c2v:function(){gx.O.AV19ProfissionalNome1=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALNOME1")},nac:gx.falseFn};
   GXValidFnc[24]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROFISSIONALID",gxz:"Z8566ProfissionalId",gxold:"O8566ProfissionalId",gxvar:"A8566ProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8566ProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8566ProfissionalId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROFISSIONALID",row || gx.fn.currentGridRowImpl(23),gx.O.A8566ProfissionalId,0)},c2v:function(){gx.O.A8566ProfissionalId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROFISSIONALID",row || gx.fn.currentGridRowImpl(23),'.')},nac:gx.falseFn};
   GXValidFnc[25]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROFISSIONALNOME",gxz:"Z8608ProfissionalNome",gxold:"O8608ProfissionalNome",gxvar:"A8608ProfissionalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8608ProfissionalNome=Value},v2z:function(Value){gx.O.Z8608ProfissionalNome=Value},v2c:function(row){gx.fn.setGridControlValue("PROFISSIONALNOME",row || gx.fn.currentGridRowImpl(23),gx.O.A8608ProfissionalNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8608ProfissionalNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PROFISSIONALNOME",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[26]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROFISSIONALDATANAS",gxz:"Z8609ProfissionalDataNas",gxold:"O8609ProfissionalDataNas",gxvar:"A8609ProfissionalDataNas",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8609ProfissionalDataNas=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8609ProfissionalDataNas=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PROFISSIONALDATANAS",row || gx.fn.currentGridRowImpl(23),gx.O.A8609ProfissionalDataNas,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8609ProfissionalDataNas=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PROFISSIONALDATANAS",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[27]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROFISSIONALCPF",gxz:"Z8610ProfissionalCPF",gxold:"O8610ProfissionalCPF",gxvar:"A8610ProfissionalCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8610ProfissionalCPF=Value},v2z:function(Value){gx.O.Z8610ProfissionalCPF=Value},v2c:function(row){gx.fn.setGridControlValue("PROFISSIONALCPF",row || gx.fn.currentGridRowImpl(23),gx.O.A8610ProfissionalCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8610ProfissionalCPF=this.val()},val:function(row){return gx.fn.getGridControlValue("PROFISSIONALCPF",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[28]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROFISSIONALFUNCAO",gxz:"Z8611ProfissionalFuncao",gxold:"O8611ProfissionalFuncao",gxvar:"A8611ProfissionalFuncao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8611ProfissionalFuncao=Value},v2z:function(Value){gx.O.Z8611ProfissionalFuncao=Value},v2c:function(row){gx.fn.setGridControlValue("PROFISSIONALFUNCAO",row || gx.fn.currentGridRowImpl(23),gx.O.A8611ProfissionalFuncao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8611ProfissionalFuncao=this.val()},val:function(row){return gx.fn.getGridControlValue("PROFISSIONALFUNCAO",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[29]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vSITUACAO",gxz:"ZV28Situacao",gxold:"OV28Situacao",gxvar:"AV28Situacao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV28Situacao=Value},v2z:function(Value){gx.O.ZV28Situacao=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vSITUACAO",row || gx.fn.currentGridRowImpl(23),gx.O.AV28Situacao,gx.O.AV32Situacao_GXI)},c2v:function(){gx.O.AV32Situacao_GXI=this.val_GXI();gx.O.AV28Situacao=this.val()},val:function(row){return gx.fn.getGridControlValue("vSITUACAO",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vSITUACAO_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV32Situacao_GXI',nac:gx.falseFn};
   GXValidFnc[30]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV22bmpAlt",gxold:"OV22bmpAlt",gxvar:"AV22bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22bmpAlt=Value},v2z:function(Value){gx.O.ZV22bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(23),gx.O.AV22bmpAlt,gx.O.AV31Bmpalt_GXI)},c2v:function(){gx.O.AV31Bmpalt_GXI=this.val_GXI();gx.O.AV22bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(23))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(23))}, gxvar_GXI:'AV31Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[31]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:23,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SITUACAOPROFISSIONAL",gxz:"Z8922SituacaoProfissional",gxold:"O8922SituacaoProfissional",gxvar:"A8922SituacaoProfissional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8922SituacaoProfissional=Value},v2z:function(Value){gx.O.Z8922SituacaoProfissional=Value},v2c:function(row){gx.fn.setGridControlValue("SITUACAOPROFISSIONAL",row || gx.fn.currentGridRowImpl(23),gx.O.A8922SituacaoProfissional,0)},c2v:function(){gx.O.A8922SituacaoProfissional=this.val()},val:function(row){return gx.fn.getGridControlValue("SITUACAOPROFISSIONAL",row || gx.fn.currentGridRowImpl(23))},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TABLENAV",grid:0};
   GXValidFnc[40]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[42]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[44]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[46]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[48]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[49]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV26Pagina",gxold:"OV26Pagina",gxvar:"AV26Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV26Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV26Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV26Pagina)},c2v:function(){gx.O.AV26Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV27PaginaAux",gxold:"OV27PaginaAux",gxvar:"AV27PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV27PaginaAux,0)},c2v:function(){gx.O.AV27PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[51]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16ProfissionalId1 = 0 ;
   this.ZV16ProfissionalId1 = 0 ;
   this.OV16ProfissionalId1 = 0 ;
   this.AV19ProfissionalNome1 = "" ;
   this.ZV19ProfissionalNome1 = "" ;
   this.OV19ProfissionalNome1 = "" ;
   this.Z8566ProfissionalId = 0 ;
   this.O8566ProfissionalId = 0 ;
   this.Z8608ProfissionalNome = "" ;
   this.O8608ProfissionalNome = "" ;
   this.Z8609ProfissionalDataNas = gx.date.nullDate() ;
   this.O8609ProfissionalDataNas = gx.date.nullDate() ;
   this.Z8610ProfissionalCPF = "" ;
   this.O8610ProfissionalCPF = "" ;
   this.Z8611ProfissionalFuncao = "" ;
   this.O8611ProfissionalFuncao = "" ;
   this.ZV28Situacao = "" ;
   this.OV28Situacao = "" ;
   this.ZV22bmpAlt = "" ;
   this.OV22bmpAlt = "" ;
   this.Z8922SituacaoProfissional = "" ;
   this.O8922SituacaoProfissional = "" ;
   this.AV26Pagina = 0 ;
   this.ZV26Pagina = 0 ;
   this.OV26Pagina = 0 ;
   this.AV27PaginaAux = 0 ;
   this.ZV27PaginaAux = 0 ;
   this.OV27PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16ProfissionalId1 = 0 ;
   this.AV19ProfissionalNome1 = "" ;
   this.AV26Pagina = 0 ;
   this.AV27PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17ProfissionalId2 = 0 ;
   this.AV23ProfissionalIdIN = 0 ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.A8566ProfissionalId = 0 ;
   this.A8608ProfissionalNome = "" ;
   this.A8609ProfissionalDataNas = gx.date.nullDate() ;
   this.A8610ProfissionalCPF = "" ;
   this.A8611ProfissionalFuncao = "" ;
   this.AV28Situacao = "" ;
   this.AV22bmpAlt = "" ;
   this.A8922SituacaoProfissional = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV24SnParametro = "" ;
   this.Events = {"e181cc2_client": ["ENTER", true] ,"e111cc2_client": ["'GXM_FIRST'", true] ,"e121cc2_client": ["'GXM_PREVIOUS'", true] ,"e131cc2_client": ["'GXM_NEXT'", true] ,"e141cc2_client": ["'GXM_LAST'", true] ,"e151cc2_client": ["'PROCURAR'", true] ,"e201cc2_client": ["'ALTERAR'", true] ,"e161cc2_client": ["'FECHAR'", true] ,"e221cc2_client": ["'ATUALIZAPAGINA'", true] ,"e231cc2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ProfissionalId1',fld:'vPROFISSIONALID1'},{av:'AV19ProfissionalNome1',fld:'vPROFISSIONALNOME1'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23ProfissionalIdIN',fld:'vPROFISSIONALIDIN',hsh:true},{av:'AV24SnParametro',fld:'vSNPARAMETRO'}],[{av:'AV16ProfissionalId1',fld:'vPROFISSIONALID1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV19ProfissionalNome1',fld:'vPROFISSIONALNOME1'},{av:'AV24SnParametro',fld:'vSNPARAMETRO'},{ctrl:'PROFISSIONALID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROFISSIONALID","Title")',ctrl:'PROFISSIONALID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'PROFISSIONALNOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROFISSIONALNOME","Title")',ctrl:'PROFISSIONALNOME',prop:'Title'},{ctrl:'PROFISSIONALDATANAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROFISSIONALDATANAS","Title")',ctrl:'PROFISSIONALDATANAS',prop:'Title'},{ctrl:'PROFISSIONALCPF',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROFISSIONALCPF","Title")',ctrl:'PROFISSIONALCPF',prop:'Title'},{ctrl:'PROFISSIONALFUNCAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROFISSIONALFUNCAO","Title")',ctrl:'PROFISSIONALFUNCAO',prop:'Title'},{av:'AV27PaginaAux',fld:'vPAGINAAUX'},{av:'AV26Pagina',fld:'vPAGINA'},{av:'AV25NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A8566ProfissionalId',fld:'PROFISSIONALID'}],[{av:'AV17ProfissionalId2',fld:'vPROFISSIONALID2'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ProfissionalId1',fld:'vPROFISSIONALID1'},{av:'AV19ProfissionalNome1',fld:'vPROFISSIONALNOME1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV23ProfissionalIdIN',fld:'vPROFISSIONALIDIN',hsh:true},{av:'AV24SnParametro',fld:'vSNPARAMETRO'},{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'}],[{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ProfissionalId1',fld:'vPROFISSIONALID1'},{av:'AV19ProfissionalNome1',fld:'vPROFISSIONALNOME1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV23ProfissionalIdIN',fld:'vPROFISSIONALIDIN',hsh:true},{av:'AV24SnParametro',fld:'vSNPARAMETRO'},{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'},{av:'AV26Pagina',fld:'vPAGINA'}],[{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ProfissionalId1',fld:'vPROFISSIONALID1'},{av:'AV19ProfissionalNome1',fld:'vPROFISSIONALNOME1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV23ProfissionalIdIN',fld:'vPROFISSIONALIDIN',hsh:true},{av:'AV24SnParametro',fld:'vSNPARAMETRO'},{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'},{av:'AV26Pagina',fld:'vPAGINA'},{av:'AV27PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ProfissionalId1',fld:'vPROFISSIONALID1'},{av:'AV19ProfissionalNome1',fld:'vPROFISSIONALNOME1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV23ProfissionalIdIN',fld:'vPROFISSIONALIDIN',hsh:true},{av:'AV24SnParametro',fld:'vSNPARAMETRO'},{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'},{av:'AV27PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ProfissionalId1',fld:'vPROFISSIONALID1'},{av:'AV19ProfissionalNome1',fld:'vPROFISSIONALNOME1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV23ProfissionalIdIN',fld:'vPROFISSIONALIDIN',hsh:true},{av:'AV24SnParametro',fld:'vSNPARAMETRO'},{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'}],[{av:'AV24SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV26Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8566ProfissionalId',fld:'PROFISSIONALID'}],[{av:'A8566ProfissionalId',fld:'PROFISSIONALID'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'}],[{av:'AV28Situacao',fld:'vSITUACAO'},{av:'gx.fn.getCtrlProperty("vSITUACAO","Tooltiptext")',ctrl:'vSITUACAO',prop:'Tooltiptext'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV17ProfissionalId2',fld:'vPROFISSIONALID2'}],[]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16ProfissionalId1',fld:'vPROFISSIONALID1'},{av:'AV19ProfissionalNome1',fld:'vPROFISSIONALNOME1'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV22bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV23ProfissionalIdIN',fld:'vPROFISSIONALIDIN',hsh:true},{av:'AV24SnParametro',fld:'vSNPARAMETRO'},{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV23ProfissionalIdIN", "vPROFISSIONALIDIN", 0, "int");
   this.setVCMap("AV24SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV17ProfissionalId2", "vPROFISSIONALID2", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV23ProfissionalIdIN", "vPROFISSIONALIDIN", 0, "int");
   this.setVCMap("AV24SnParametro", "vSNPARAMETRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[51]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV22bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV22bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV23ProfissionalIdIN"});
   GridContainer.addRefreshingVar({rfrVar:"AV24SnParametro"});
   GridContainer.addRefreshingVar({rfrVar:"A8922SituacaoProfissional", rfrProp:"Value", gxAttId:"8922"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaprofissional());
