/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 13:9:16.78
*/
gx.evt.autoSkip = false;
gx.define('hsolicitante', false, function () {
   this.ServerClass =  "hsolicitante" ;
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
      this.AV32SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV36Pgmname=gx.fn.getControlValue("vPGMNAME") ;
   };
   this.e11qe2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12qe2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17qe2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13qe2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14qe2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15qe2_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16qe2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20qe2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21qe2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22qe2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e24qe2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25qe2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26qe2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,23,26,29,31,33,35,37,39,42,44,45,49,50,51,52,53,54,55,56,57,58,59,60,67];
   this.GXLastCtrlId =67;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",48,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hsolicitante",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(4028,49,"SOLICITANTECODIGO","","","SolicitanteCodigo","int",0,"px",4,4,"right",null,[],4028,"SolicitanteCodigo",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Descricao",50,"vDESCRICAO","","","Descricao","svchar",0,"px",30,30,"left",null,[],"Descricao","Descricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4060,51,"SOLICITANTENOME","Nome Solicitante","","SolicitanteNome","svchar",0,"px",50,50,"left",null,[],4060,"SolicitanteNome",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Contato",52,"vCONTATO","","","Contato","svchar",0,"px",30,30,"left",null,[],"Contato","Contato",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4062,53,"SOLICITANTECONTATO","Contato","","SolicitanteContato","svchar",0,"px",40,40,"left",null,[],4062,"SolicitanteContato",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4063,54,"SOLICITANTETELEFONE","","","SolicitanteTelefone","svchar",0,"px",15,15,"left",null,[],4063,"SolicitanteTelefone",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4064,55,"SOLICITANTERAMAL","","","SolicitanteRamal","svchar",0,"px",4,4,"left",null,[],4064,"SolicitanteRamal",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Email",56,"vEMAIL","","","Email","svchar",0,"px",30,30,"left",null,[],"Email","Email",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(4065,57,"SOLICITANTEEMAIL","Email","","SolicitanteEmail","svchar",0,"px",70,70,"left",null,[],4065,"SolicitanteEmail",false,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",58,0,"px",17,"px","e20qe2_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",59,0,"px",17,"px","e21qe2_client","","Exc","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",60,0,"px",17,"px","e22qe2_client","","Con","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE9",grid:0};
   GXValidFnc[8]={fld:"TABLE10",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSOLICITANTECODIGO",gxz:"ZV27SolicitanteCodigo",gxold:"OV27SolicitanteCodigo",gxvar:"AV27SolicitanteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27SolicitanteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27SolicitanteCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vSOLICITANTECODIGO",gx.O.AV27SolicitanteCodigo,0)},c2v:function(){gx.O.AV27SolicitanteCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vSOLICITANTECODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vSOLICITANTENOME",gxz:"ZV28SolicitanteNome",gxold:"OV28SolicitanteNome",gxvar:"AV28SolicitanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28SolicitanteNome=Value},v2z:function(Value){gx.O.ZV28SolicitanteNome=Value},v2c:function(){gx.fn.setControlValue("vSOLICITANTENOME",gx.O.AV28SolicitanteNome,0)},c2v:function(){gx.O.AV28SolicitanteNome=this.val()},val:function(){return gx.fn.getControlValue("vSOLICITANTENOME")},nac:gx.falseFn};
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
   GXValidFnc[49]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTECODIGO",gxz:"Z4028SolicitanteCodigo",gxold:"O4028SolicitanteCodigo",gxvar:"A4028SolicitanteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A4028SolicitanteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z4028SolicitanteCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTECODIGO",row || gx.fn.currentGridRowImpl(48),gx.O.A4028SolicitanteCodigo,0)},c2v:function(){gx.O.A4028SolicitanteCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("SOLICITANTECODIGO",row || gx.fn.currentGridRowImpl(48),'.')},nac:gx.falseFn};
   GXValidFnc[50]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vDESCRICAO",gxz:"ZV29Descricao",gxold:"OV29Descricao",gxvar:"AV29Descricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV29Descricao=Value},v2z:function(Value){gx.O.ZV29Descricao=Value},v2c:function(row){gx.fn.setGridControlValue("vDESCRICAO",row || gx.fn.currentGridRowImpl(48),gx.O.AV29Descricao,0)},c2v:function(){gx.O.AV29Descricao=this.val()},val:function(row){return gx.fn.getGridControlValue("vDESCRICAO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[51]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTENOME",gxz:"Z4060SolicitanteNome",gxold:"O4060SolicitanteNome",gxvar:"A4060SolicitanteNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4060SolicitanteNome=Value},v2z:function(Value){gx.O.Z4060SolicitanteNome=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTENOME",row || gx.fn.currentGridRowImpl(48),gx.O.A4060SolicitanteNome,0)},c2v:function(){gx.O.A4060SolicitanteNome=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITANTENOME",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[52]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vCONTATO",gxz:"ZV31Contato",gxold:"OV31Contato",gxvar:"AV31Contato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV31Contato=Value},v2z:function(Value){gx.O.ZV31Contato=Value},v2c:function(row){gx.fn.setGridControlValue("vCONTATO",row || gx.fn.currentGridRowImpl(48),gx.O.AV31Contato,0)},c2v:function(){gx.O.AV31Contato=this.val()},val:function(row){return gx.fn.getGridControlValue("vCONTATO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTECONTATO",gxz:"Z4062SolicitanteContato",gxold:"O4062SolicitanteContato",gxvar:"A4062SolicitanteContato",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4062SolicitanteContato=Value},v2z:function(Value){gx.O.Z4062SolicitanteContato=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTECONTATO",row || gx.fn.currentGridRowImpl(48),gx.O.A4062SolicitanteContato,0)},c2v:function(){gx.O.A4062SolicitanteContato=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITANTECONTATO",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"svchar",len:15,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTETELEFONE",gxz:"Z4063SolicitanteTelefone",gxold:"O4063SolicitanteTelefone",gxvar:"A4063SolicitanteTelefone",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4063SolicitanteTelefone=Value},v2z:function(Value){gx.O.Z4063SolicitanteTelefone=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTETELEFONE",row || gx.fn.currentGridRowImpl(48),gx.O.A4063SolicitanteTelefone,0)},c2v:function(){gx.O.A4063SolicitanteTelefone=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITANTETELEFONE",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"svchar",len:4,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTERAMAL",gxz:"Z4064SolicitanteRamal",gxold:"O4064SolicitanteRamal",gxvar:"A4064SolicitanteRamal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4064SolicitanteRamal=Value},v2z:function(Value){gx.O.Z4064SolicitanteRamal=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTERAMAL",row || gx.fn.currentGridRowImpl(48),gx.O.A4064SolicitanteRamal,0)},c2v:function(){gx.O.A4064SolicitanteRamal=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITANTERAMAL",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:0,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vEMAIL",gxz:"ZV30Email",gxold:"OV30Email",gxvar:"AV30Email",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV30Email=Value},v2z:function(Value){gx.O.ZV30Email=Value},v2c:function(row){gx.fn.setGridControlValue("vEMAIL",row || gx.fn.currentGridRowImpl(48),gx.O.AV30Email,0)},c2v:function(){gx.O.AV30Email=this.val()},val:function(row){return gx.fn.getGridControlValue("vEMAIL",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:70,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"SOLICITANTEEMAIL",gxz:"Z4065SolicitanteEmail",gxold:"O4065SolicitanteEmail",gxvar:"A4065SolicitanteEmail",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A4065SolicitanteEmail=Value},v2z:function(Value){gx.O.Z4065SolicitanteEmail=Value},v2c:function(row){gx.fn.setGridControlValue("SOLICITANTEEMAIL",row || gx.fn.currentGridRowImpl(48),gx.O.A4065SolicitanteEmail,0)},c2v:function(){gx.O.A4065SolicitanteEmail=this.val()},val:function(row){return gx.fn.getGridControlValue("SOLICITANTEEMAIL",row || gx.fn.currentGridRowImpl(48))},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(48),gx.O.AV7bmpAlt,gx.O.AV38Bmpalt_GXI)},c2v:function(){gx.O.AV38Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV38Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48),gx.O.AV8bmpExc,gx.O.AV39Bmpexc_GXI)},c2v:function(){gx.O.AV39Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV39Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:48,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(48),gx.O.AV16bmpCon,gx.O.AV40Bmpcon_GXI)},c2v:function(){gx.O.AV40Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(48))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(48))}, gxvar_GXI:'AV40Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[67]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27SolicitanteCodigo = 0 ;
   this.ZV27SolicitanteCodigo = 0 ;
   this.OV27SolicitanteCodigo = 0 ;
   this.AV28SolicitanteNome = "" ;
   this.ZV28SolicitanteNome = "" ;
   this.OV28SolicitanteNome = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z4028SolicitanteCodigo = 0 ;
   this.O4028SolicitanteCodigo = 0 ;
   this.ZV29Descricao = "" ;
   this.OV29Descricao = "" ;
   this.Z4060SolicitanteNome = "" ;
   this.O4060SolicitanteNome = "" ;
   this.ZV31Contato = "" ;
   this.OV31Contato = "" ;
   this.Z4062SolicitanteContato = "" ;
   this.O4062SolicitanteContato = "" ;
   this.Z4063SolicitanteTelefone = "" ;
   this.O4063SolicitanteTelefone = "" ;
   this.Z4064SolicitanteRamal = "" ;
   this.O4064SolicitanteRamal = "" ;
   this.ZV30Email = "" ;
   this.OV30Email = "" ;
   this.Z4065SolicitanteEmail = "" ;
   this.O4065SolicitanteEmail = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27SolicitanteCodigo = 0 ;
   this.AV28SolicitanteNome = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A4027SolicitanteEmpresaId = "" ;
   this.A4028SolicitanteCodigo = 0 ;
   this.AV29Descricao = "" ;
   this.A4060SolicitanteNome = "" ;
   this.AV31Contato = "" ;
   this.A4062SolicitanteContato = "" ;
   this.A4063SolicitanteTelefone = "" ;
   this.A4064SolicitanteRamal = "" ;
   this.AV30Email = "" ;
   this.A4065SolicitanteEmail = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV32SnRecuperaFiltro = "" ;
   this.AV36Pgmname = "" ;
   this.Events = {"e11qe2_client": ["'ANTERIOR'", true] ,"e12qe2_client": ["'PROXIMO'", true] ,"e17qe2_client": ["VPAGINA.CLICK", true] ,"e13qe2_client": ["'NOVO'", true] ,"e14qe2_client": ["'FECHAR'", true] ,"e15qe2_client": ["'IMPRIMIR'", true] ,"e16qe2_client": ["'PROCURAR'", true] ,"e20qe2_client": ["'ALTERAR'", true] ,"e21qe2_client": ["'EXCLUIR'", true] ,"e22qe2_client": ["'CONSULTAR'", true] ,"e24qe2_client": ["'ATUALIZAPAGINA'", true] ,"e25qe2_client": ["ENTER", true] ,"e26qe2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV28SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'A4060SolicitanteNome',fld:'SOLICITANTENOME'},{av:'A4062SolicitanteContato',fld:'SOLICITANTECONTATO'},{av:'A4065SolicitanteEmail',fld:'SOLICITANTEEMAIL'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV28SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'A4060SolicitanteNome',fld:'SOLICITANTENOME'},{av:'A4062SolicitanteContato',fld:'SOLICITANTECONTATO'},{av:'A4065SolicitanteEmail',fld:'SOLICITANTEEMAIL'}],[{ctrl:'SOLICITANTECODIGO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SOLICITANTECODIGO","Title")',ctrl:'SOLICITANTECODIGO',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'vDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vDESCRICAO","Title")',ctrl:'vDESCRICAO',prop:'Title'},{ctrl:'vCONTATO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vCONTATO","Title")',ctrl:'vCONTATO',prop:'Title'},{ctrl:'SOLICITANTETELEFONE',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SOLICITANTETELEFONE","Title")',ctrl:'SOLICITANTETELEFONE',prop:'Title'},{ctrl:'SOLICITANTERAMAL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("SOLICITANTERAMAL","Title")',ctrl:'SOLICITANTERAMAL',prop:'Title'},{ctrl:'vEMAIL',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vEMAIL","Title")',ctrl:'vEMAIL',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV28SolicitanteNome',fld:'vSOLICITANTENOME'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV28SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'A4060SolicitanteNome',fld:'SOLICITANTENOME'},{av:'A4062SolicitanteContato',fld:'SOLICITANTECONTATO'},{av:'A4065SolicitanteEmail',fld:'SOLICITANTEEMAIL'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV28SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'A4060SolicitanteNome',fld:'SOLICITANTENOME'},{av:'A4062SolicitanteContato',fld:'SOLICITANTECONTATO'},{av:'A4065SolicitanteEmail',fld:'SOLICITANTEEMAIL'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV28SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'A4060SolicitanteNome',fld:'SOLICITANTENOME'},{av:'A4062SolicitanteContato',fld:'SOLICITANTECONTATO'},{av:'A4065SolicitanteEmail',fld:'SOLICITANTEEMAIL'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV28SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'}],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV37Pgmdesc',fld:'vPGMDESC'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV33QtdPagGeradas',fld:'vQTDPAGGERADAS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV28SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'A4060SolicitanteNome',fld:'SOLICITANTENOME'},{av:'A4062SolicitanteContato',fld:'SOLICITANTECONTATO'},{av:'A4065SolicitanteEmail',fld:'SOLICITANTEEMAIL'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV28SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV28SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV28SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV36Pgmname',fld:'vPGMNAME'}],[{av:'A4028SolicitanteCodigo',fld:'SOLICITANTECODIGO'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["LOAD"] = [[{av:'A4060SolicitanteNome',fld:'SOLICITANTENOME'},{av:'A4062SolicitanteContato',fld:'SOLICITANTECONTATO'},{av:'A4065SolicitanteEmail',fld:'SOLICITANTEEMAIL'}],[{av:'AV29Descricao',fld:'vDESCRICAO'},{av:'gx.fn.getCtrlProperty("vDESCRICAO","Tooltiptext")',ctrl:'vDESCRICAO',prop:'Tooltiptext'},{av:'AV31Contato',fld:'vCONTATO'},{av:'gx.fn.getCtrlProperty("vCONTATO","Tooltiptext")',ctrl:'vCONTATO',prop:'Tooltiptext'},{av:'AV30Email',fld:'vEMAIL'},{av:'gx.fn.getCtrlProperty("vEMAIL","Tooltiptext")',ctrl:'vEMAIL',prop:'Tooltiptext'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27SolicitanteCodigo',fld:'vSOLICITANTECODIGO'},{av:'AV28SolicitanteNome',fld:'vSOLICITANTENOME'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV32SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV36Pgmname',fld:'vPGMNAME'},{av:'A4060SolicitanteNome',fld:'SOLICITANTENOME'},{av:'A4062SolicitanteContato',fld:'SOLICITANTECONTATO'},{av:'A4065SolicitanteEmail',fld:'SOLICITANTEEMAIL'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV32SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV36Pgmname", "vPGMNAME", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[67]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV32SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"AV36Pgmname"});
   GridContainer.addRefreshingVar({rfrVar:"A4060SolicitanteNome", rfrProp:"Value", gxAttId:"4060"});
   GridContainer.addRefreshingVar({rfrVar:"A4062SolicitanteContato", rfrProp:"Value", gxAttId:"4062"});
   GridContainer.addRefreshingVar({rfrVar:"A4065SolicitanteEmail", rfrProp:"Value", gxAttId:"4065"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hsolicitante());
