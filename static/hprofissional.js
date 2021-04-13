/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 18:3:56.70
*/
gx.evt.autoSkip = false;
gx.define('hprofissional', false, function () {
   this.ServerClass =  "hprofissional" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("10", "'IMPRIMIR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV17EmpresaPadrao=gx.fn.getControlValue("vEMPRESAPADRAO") ;
      this.AV40QtdRegistros=gx.fn.getIntegerValue("vQTDREGISTROS",'.') ;
      this.AV49SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV52Pgmname=gx.fn.getControlValue("vPGMNAME") ;
      this.A8567ProfissionalEmpresaId=gx.fn.getControlValue("PROFISSIONALEMPRESAID") ;
      this.A8922SituacaoProfissional=gx.fn.getControlValue("SITUACAOPROFISSIONAL") ;
   };
   this.e111cd2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e121cd2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e171cd2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e131cd2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e141cd2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e151cd2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e161cd2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e201cd2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e211cd2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e221cd2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e241cd2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e251cd2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e261cd2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,56,57,58,59,60,61,62,68,70];
   this.GXLastCtrlId =70;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hprofissional",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(8566,49,"PROFISSIONALID","","","ProfissionalId","int",0,"px",4,4,"right",null,[],8566,"ProfissionalId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Profissionalnomedois",50,"vPROFISSIONALNOMEDOIS","","","ProfissionalNomeDois","svchar",0,"px",20,20,"left",null,[],"Profissionalnomedois","ProfissionalNomeDois",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8609,51,"PROFISSIONALDATANAS","","","ProfissionalDataNas","date",0,"px",10,10,"right",null,[],8609,"ProfissionalDataNas",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8610,52,"PROFISSIONALCPF","","","ProfissionalCPF","char",0,"px",14,14,"left",null,[],8610,"ProfissionalCPF",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8612,53,"PROFISSIONALCONTATO","","","ProfissionalContato","svchar",0,"px",15,15,"left",null,[],8612,"ProfissionalContato",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Profissionalcontato",54,"vPROFISSIONALCONTATO","Contato Profissional","","ProfissionalContato","svchar",0,"px",15,15,"left",null,[],"Profissionalcontato","ProfissionalContato",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(8611,55,"PROFISSIONALFUNCAO","","","ProfissionalFuncao","svchar",0,"px",20,20,"left",null,[],8611,"ProfissionalFuncao",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Profissionalfuncao",56,"vPROFISSIONALFUNCAO","Função Profissional","","ProfissionalFuncao","svchar",0,"px",20,20,"left",null,[],"Profissionalfuncao","ProfissionalFuncao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2953,57,"SETORID","","","SetorId","char",0,"px",15,15,"left",null,[],2953,"SetorId",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpsituacaoprofissional","vBMPSITUACAOPROFISSIONAL",58,0,"px",17,"px",null,"","Sit","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",59,0,"px",17,"px","e201cd2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",60,0,"px",17,"px","e211cd2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",61,0,"px",17,"px","e221cd2_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(8608,62,"PROFISSIONALNOME","Nome","","ProfissionalNome","svchar",0,"px",40,40,"left",null,[],8608,"ProfissionalNome",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROFISSIONALID",gxz:"ZV38ProfissionalId",gxold:"OV38ProfissionalId",gxvar:"AV38ProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV38ProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV38ProfissionalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROFISSIONALID",gx.O.AV38ProfissionalId,0)},c2v:function(){gx.O.AV38ProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROFISSIONALID",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROFISSIONALNOME",gxz:"ZV39ProfissionalNome",gxold:"OV39ProfissionalNome",gxvar:"AV39ProfissionalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV39ProfissionalNome=Value},v2z:function(Value){gx.O.ZV39ProfissionalNome=Value},v2c:function(){gx.fn.setControlValue("vPROFISSIONALNOME",gx.O.AV39ProfissionalNome,0)},c2v:function(){gx.O.AV39ProfissionalNome=this.val()},val:function(){return gx.fn.getControlValue("vPROFISSIONALNOME")},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TABLE4",grid:0};
   GXValidFnc[26]={fld:"TABLE8",grid:0};
   GXValidFnc[29]={fld:"IMAGE2",grid:0};
   GXValidFnc[31]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[33]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[35]={fld:"IMAGE1",grid:0};
   GXValidFnc[37]={fld:"BTNHELP",grid:0};
   GXValidFnc[39]={fld:"TABLE5",grid:0};
   GXValidFnc[42]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[45]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROFISSIONALID",gxz:"Z8566ProfissionalId",gxold:"O8566ProfissionalId",gxvar:"A8566ProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8566ProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8566ProfissionalId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROFISSIONALID",row || gx.fn.currentGridRowImpl(48),gx.O.A8566ProfissionalId,0)},c2v:function(){gx.O.A8566ProfissionalId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROFISSIONALID",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROFISSIONALNOMEDOIS",gxz:"ZV43ProfissionalNomeDois",gxold:"OV43ProfissionalNomeDois",gxvar:"AV43ProfissionalNomeDois",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV43ProfissionalNomeDois=Value},v2z:function(Value){gx.O.ZV43ProfissionalNomeDois=Value},v2c:function(row){gx.fn.setGridControlValue("vPROFISSIONALNOMEDOIS",row || gx.fn.currentGridRowImpl(48),gx.O.AV43ProfissionalNomeDois,0)},c2v:function(){gx.O.AV43ProfissionalNomeDois=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROFISSIONALNOMEDOIS",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROFISSIONALDATANAS",gxz:"Z8609ProfissionalDataNas",gxold:"O8609ProfissionalDataNas",gxvar:"A8609ProfissionalDataNas",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8609ProfissionalDataNas=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8609ProfissionalDataNas=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("PROFISSIONALDATANAS",row || gx.fn.currentGridRowImpl(48),gx.O.A8609ProfissionalDataNas,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8609ProfissionalDataNas=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("PROFISSIONALDATANAS",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROFISSIONALCPF",gxz:"Z8610ProfissionalCPF",gxold:"O8610ProfissionalCPF",gxvar:"A8610ProfissionalCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8610ProfissionalCPF=Value},v2z:function(Value){gx.O.Z8610ProfissionalCPF=Value},v2c:function(row){gx.fn.setGridControlValue("PROFISSIONALCPF",row || gx.fn.currentGridRowImpl(48),gx.O.A8610ProfissionalCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8610ProfissionalCPF=this.val()},val:function(row){return gx.fn.getGridControlValue("PROFISSIONALCPF",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROFISSIONALCONTATO",gxz:"Z8612ProfissionalContato",gxold:"O8612ProfissionalContato",gxvar:"A8612ProfissionalContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8612ProfissionalContato=Value},v2z:function(Value){gx.O.Z8612ProfissionalContato=Value},v2c:function(row){gx.fn.setGridControlValue("PROFISSIONALCONTATO",row || gx.fn.currentGridRowImpl(48),gx.O.A8612ProfissionalContato,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8612ProfissionalContato=this.val()},val:function(row){return gx.fn.getGridControlValue("PROFISSIONALCONTATO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROFISSIONALCONTATO",gxz:"ZV47ProfissionalContato",gxold:"OV47ProfissionalContato",gxvar:"AV47ProfissionalContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV47ProfissionalContato=Value},v2z:function(Value){gx.O.ZV47ProfissionalContato=Value},v2c:function(row){gx.fn.setGridControlValue("vPROFISSIONALCONTATO",row || gx.fn.currentGridRowImpl(48),gx.O.AV47ProfissionalContato,0)},c2v:function(){gx.O.AV47ProfissionalContato=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROFISSIONALCONTATO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROFISSIONALFUNCAO",gxz:"Z8611ProfissionalFuncao",gxold:"O8611ProfissionalFuncao",gxvar:"A8611ProfissionalFuncao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8611ProfissionalFuncao=Value},v2z:function(Value){gx.O.Z8611ProfissionalFuncao=Value},v2c:function(row){gx.fn.setGridControlValue("PROFISSIONALFUNCAO",row || gx.fn.currentGridRowImpl(48),gx.O.A8611ProfissionalFuncao,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8611ProfissionalFuncao=this.val()},val:function(row){return gx.fn.getGridControlValue("PROFISSIONALFUNCAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vPROFISSIONALFUNCAO",gxz:"ZV48ProfissionalFuncao",gxold:"OV48ProfissionalFuncao",gxvar:"AV48ProfissionalFuncao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV48ProfissionalFuncao=Value},v2z:function(Value){gx.O.ZV48ProfissionalFuncao=Value},v2c:function(row){gx.fn.setGridControlValue("vPROFISSIONALFUNCAO",row || gx.fn.currentGridRowImpl(48),gx.O.AV48ProfissionalFuncao,0)},c2v:function(){gx.O.AV48ProfissionalFuncao=this.val()},val:function(row){return gx.fn.getGridControlValue("vPROFISSIONALFUNCAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"char",len:15,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SETORID",gxz:"Z2953SetorId",gxold:"O2953SetorId",gxvar:"A2953SetorId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2953SetorId=Value},v2z:function(Value){gx.O.Z2953SetorId=Value},v2c:function(row){gx.fn.setGridControlValue("SETORID",row || gx.fn.currentGridRowImpl(48),gx.O.A2953SetorId,0)},c2v:function(){gx.O.A2953SetorId=this.val()},val:function(row){return gx.fn.getGridControlValue("SETORID",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPSITUACAOPROFISSIONAL",gxz:"ZV46BmpSituacaoProfissional",gxold:"OV46BmpSituacaoProfissional",gxvar:"AV46BmpSituacaoProfissional",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV46BmpSituacaoProfissional=Value},v2z:function(Value){gx.O.ZV46BmpSituacaoProfissional=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPSITUACAOPROFISSIONAL",row || gx.fn.currentGridRowImpl(48),gx.O.AV46BmpSituacaoProfissional,gx.O.AV58Bmpsituacaoprofissional_GXI)},c2v:function(){gx.O.AV58Bmpsituacaoprofissional_GXI=this.val_GXI();gx.O.AV46BmpSituacaoProfissional=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPSITUACAOPROFISSIONAL",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPSITUACAOPROFISSIONAL_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV58Bmpsituacaoprofissional_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV54Bmpalt_GXI)},c2v:function(){gx.O.AV54Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV54Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV55Bmpexc_GXI)},c2v:function(){gx.O.AV55Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV55Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV56Bmpcon_GXI)},c2v:function(){gx.O.AV56Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV56Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROFISSIONALNOME",gxz:"Z8608ProfissionalNome",gxold:"O8608ProfissionalNome",gxvar:"A8608ProfissionalNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8608ProfissionalNome=Value},v2z:function(Value){gx.O.Z8608ProfissionalNome=Value},v2c:function(row){gx.fn.setGridControlValue("PROFISSIONALNOME",row || gx.fn.currentGridRowImpl(48),gx.O.A8608ProfissionalNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8608ProfissionalNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PROFISSIONALNOME",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vSETOREMPRESAID",gxz:"ZV33SetorEmpresaId",gxold:"OV33SetorEmpresaId",gxvar:"AV33SetorEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV33SetorEmpresaId=Value},v2z:function(Value){gx.O.ZV33SetorEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vSETOREMPRESAID",gx.O.AV33SetorEmpresaId,0)},c2v:function(){gx.O.AV33SetorEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vSETOREMPRESAID")},nac:gx.falseFn};
   this.AV38ProfissionalId = 0 ;
   this.ZV38ProfissionalId = 0 ;
   this.OV38ProfissionalId = 0 ;
   this.AV39ProfissionalNome = "" ;
   this.ZV39ProfissionalNome = "" ;
   this.OV39ProfissionalNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z8566ProfissionalId = 0 ;
   this.O8566ProfissionalId = 0 ;
   this.ZV43ProfissionalNomeDois = "" ;
   this.OV43ProfissionalNomeDois = "" ;
   this.Z8609ProfissionalDataNas = gx.date.nullDate() ;
   this.O8609ProfissionalDataNas = gx.date.nullDate() ;
   this.Z8610ProfissionalCPF = "" ;
   this.O8610ProfissionalCPF = "" ;
   this.Z8612ProfissionalContato = "" ;
   this.O8612ProfissionalContato = "" ;
   this.ZV47ProfissionalContato = "" ;
   this.OV47ProfissionalContato = "" ;
   this.Z8611ProfissionalFuncao = "" ;
   this.O8611ProfissionalFuncao = "" ;
   this.ZV48ProfissionalFuncao = "" ;
   this.OV48ProfissionalFuncao = "" ;
   this.Z2953SetorId = "" ;
   this.O2953SetorId = "" ;
   this.ZV46BmpSituacaoProfissional = "" ;
   this.OV46BmpSituacaoProfissional = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z8608ProfissionalNome = "" ;
   this.O8608ProfissionalNome = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV33SetorEmpresaId = "" ;
   this.ZV33SetorEmpresaId = "" ;
   this.OV33SetorEmpresaId = "" ;
   this.AV38ProfissionalId = 0 ;
   this.AV39ProfissionalNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV33SetorEmpresaId = "" ;
   this.A8922SituacaoProfissional = "" ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.A8566ProfissionalId = 0 ;
   this.AV43ProfissionalNomeDois = "" ;
   this.A8609ProfissionalDataNas = gx.date.nullDate() ;
   this.A8610ProfissionalCPF = "" ;
   this.A8612ProfissionalContato = "" ;
   this.AV47ProfissionalContato = "" ;
   this.A8611ProfissionalFuncao = "" ;
   this.AV48ProfissionalFuncao = "" ;
   this.A2953SetorId = "" ;
   this.AV46BmpSituacaoProfissional = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A8608ProfissionalNome = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV40QtdRegistros = 0 ;
   this.AV49SnRecuperaFiltro = "" ;
   this.AV52Pgmname = "" ;
   this.Events = {"e111cd2_client": ["'ANTERIOR'", true] ,"e121cd2_client": ["'PROXIMO'", true] ,"e171cd2_client": ["VPAGINA.CLICK", true] ,"e131cd2_client": ["'NOVO'", true] ,"e141cd2_client": ["'FECHAR'", true] ,"e151cd2_client": ["'IMPRIMIR'", true] ,"e161cd2_client": ["'PROCURAR'", true] ,"e201cd2_client": ["'ALTERAR'", true] ,"e211cd2_client": ["'EXCLUIR'", true] ,"e221cd2_client": ["'CONSULTAR'", true] ,"e241cd2_client": ["'ATUALIZAPAGINA'", true] ,"e251cd2_client": ["ENTER", true] ,"e261cd2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV39ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV52Pgmname',fld:'vPGMNAME'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV43ProfissionalNomeDois',fld:'vPROFISSIONALNOMEDOIS'},{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'A8612ProfissionalContato',fld:'PROFISSIONALCONTATO'},{av:'A8611ProfissionalFuncao',fld:'PROFISSIONALFUNCAO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV39ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV52Pgmname',fld:'vPGMNAME'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV43ProfissionalNomeDois',fld:'vPROFISSIONALNOMEDOIS'},{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'A8612ProfissionalContato',fld:'PROFISSIONALCONTATO'},{av:'A8611ProfissionalFuncao',fld:'PROFISSIONALFUNCAO'},{ctrl:'GRID',prop:'Rows'}],[{ctrl:'PROFISSIONALID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROFISSIONALID","Title")',ctrl:'PROFISSIONALID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'vPROFISSIONALNOMEDOIS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vPROFISSIONALNOMEDOIS","Title")',ctrl:'vPROFISSIONALNOMEDOIS',prop:'Title'},{ctrl:'PROFISSIONALDATANAS',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROFISSIONALDATANAS","Title")',ctrl:'PROFISSIONALDATANAS',prop:'Title'},{ctrl:'PROFISSIONALCPF',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROFISSIONALCPF","Title")',ctrl:'PROFISSIONALCPF',prop:'Title'},{ctrl:'PROFISSIONALCONTATO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROFISSIONALCONTATO","Title")',ctrl:'PROFISSIONALCONTATO',prop:'Title'},{ctrl:'PROFISSIONALFUNCAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROFISSIONALFUNCAO","Title")',ctrl:'PROFISSIONALFUNCAO',prop:'Title'},{ctrl:'SETORID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SETORID","Title")',ctrl:'SETORID',prop:'Title'},{av:'AV36QtdRegistrosGrid',fld:'vQTDREGISTROSGRID'},{av:'AV37QtdPaginas',fld:'vQTDPAGINAS'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV39ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV40QtdRegistros',fld:'vQTDREGISTROS'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV39ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV52Pgmname',fld:'vPGMNAME'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV43ProfissionalNomeDois',fld:'vPROFISSIONALNOMEDOIS'},{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'A8612ProfissionalContato',fld:'PROFISSIONALCONTATO'},{av:'A8611ProfissionalFuncao',fld:'PROFISSIONALFUNCAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV39ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV52Pgmname',fld:'vPGMNAME'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV43ProfissionalNomeDois',fld:'vPROFISSIONALNOMEDOIS'},{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'A8612ProfissionalContato',fld:'PROFISSIONALCONTATO'},{av:'A8611ProfissionalFuncao',fld:'PROFISSIONALFUNCAO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV39ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV52Pgmname',fld:'vPGMNAME'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV43ProfissionalNomeDois',fld:'vPROFISSIONALNOMEDOIS'},{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'A8612ProfissionalContato',fld:'PROFISSIONALCONTATO'},{av:'A8611ProfissionalFuncao',fld:'PROFISSIONALFUNCAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV39ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV52Pgmname',fld:'vPGMNAME'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV52Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV52Pgmname',fld:'vPGMNAME'},{av:'AV42QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV53Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV42QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV39ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV52Pgmname',fld:'vPGMNAME'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV43ProfissionalNomeDois',fld:'vPROFISSIONALNOMEDOIS'},{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'A8612ProfissionalContato',fld:'PROFISSIONALCONTATO'},{av:'A8611ProfissionalFuncao',fld:'PROFISSIONALFUNCAO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV39ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV52Pgmname',fld:'vPGMNAME'}],[{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV39ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV52Pgmname',fld:'vPGMNAME'}],[{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV38ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV39ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV52Pgmname',fld:'vPGMNAME'}],[{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'A8612ProfissionalContato',fld:'PROFISSIONALCONTATO'},{av:'A8611ProfissionalFuncao',fld:'PROFISSIONALFUNCAO'}],[{av:'AV46BmpSituacaoProfissional',fld:'vBMPSITUACAOPROFISSIONAL'},{av:'AV45ProfissionalIdLoad',fld:'vPROFISSIONALIDLOAD'},{av:'AV43ProfissionalNomeDois',fld:'vPROFISSIONALNOMEDOIS'},{av:'AV47ProfissionalContato',fld:'vPROFISSIONALCONTATO'},{av:'AV48ProfissionalFuncao',fld:'vPROFISSIONALFUNCAO'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV38ProfissionalId',fld:'vPROFISSIONALID'},{av:'AV39ProfissionalNome',fld:'vPROFISSIONALNOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV40QtdRegistros',fld:'vQTDREGISTROS'},{av:'AV49SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV52Pgmname',fld:'vPGMNAME'},{av:'A8567ProfissionalEmpresaId',fld:'PROFISSIONALEMPRESAID'},{av:'A8566ProfissionalId',fld:'PROFISSIONALID'},{av:'AV43ProfissionalNomeDois',fld:'vPROFISSIONALNOMEDOIS'},{av:'A8922SituacaoProfissional',fld:'SITUACAOPROFISSIONAL'},{av:'A8608ProfissionalNome',fld:'PROFISSIONALNOME'},{av:'A8612ProfissionalContato',fld:'PROFISSIONALCONTATO'},{av:'A8611ProfissionalFuncao',fld:'PROFISSIONALFUNCAO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV40QtdRegistros", "vQTDREGISTROS", 0, "int");
   this.setVCMap("AV49SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV52Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A8567ProfissionalEmpresaId", "PROFISSIONALEMPRESAID", 0, "char");
   this.setVCMap("A8922SituacaoProfissional", "SITUACAOPROFISSIONAL", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV40QtdRegistros", "vQTDREGISTROS", 0, "int");
   this.setVCMap("AV49SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV52Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("A8567ProfissionalEmpresaId", "PROFISSIONALEMPRESAID", 0, "char");
   this.setVCMap("A8922SituacaoProfissional", "SITUACAOPROFISSIONAL", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[68]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV40QtdRegistros"});
   GridContainer.addRefreshingVar({rfrVar:"AV49SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV52Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A8567ProfissionalEmpresaId"});
   GridContainer.addRefreshingVar({rfrVar:"A8566ProfissionalId", rfrProp:"Value", gxAttId:"8566"});
   GridContainer.addRefreshingVar({rfrVar:"AV43ProfissionalNomeDois", rfrProp:"Value", gxAttId:"Profissionalnomedois"});
   GridContainer.addRefreshingVar({rfrVar:"A8922SituacaoProfissional"});
   GridContainer.addRefreshingVar({rfrVar:"A8608ProfissionalNome", rfrProp:"Value", gxAttId:"8608"});
   GridContainer.addRefreshingVar({rfrVar:"A8612ProfissionalContato", rfrProp:"Value", gxAttId:"8612"});
   GridContainer.addRefreshingVar({rfrVar:"A8611ProfissionalFuncao", rfrProp:"Value", gxAttId:"8611"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hprofissional());
