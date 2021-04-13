/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:38:31.17
*/
gx.evt.autoSkip = false;
gx.define('hconvidado', false, function () {
   this.ServerClass =  "hconvidado" ;
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
      this.AV34SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
   };
   this.e11h42_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e12h42_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e17h42_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e13h42_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e14h42_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e15h42_client=function()
   {
      this.executeServerEvent("'IMPRIMIR'", true, null, false, false);
   };
   this.e16h42_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20h42_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e21h42_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e22h42_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e23h42_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e25h42_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e26h42_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,16,18,21,23,25,27,31,38,41,44,46,48,50,52,54,57,59,60,64,65,66,67,68,69,70,71,72,79,80];
   this.GXLastCtrlId =80;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",63,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconvidado",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2632,64,"CONVIDADOID","","","ConvidadoId","int",0,"px",6,6,"right",null,[],2632,"ConvidadoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2625,65,"CONVIDADONOME","","","ConvidadoNome","svchar",0,"px",50,50,"left",null,[],2625,"ConvidadoNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2626,66,"CONVIDADOCPF","CPF do Convidado","","ConvidadoCPF","char",0,"px",14,14,"left",null,[],2626,"ConvidadoCPF",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2627,67,"CONVIDADORG","RG do Convidado","","ConvidadoRG","svchar",0,"px",20,20,"left",null,[],2627,"ConvidadoRG",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2628,68,"CONVIDADODATANASCIMENTO","Nascimento","","ConvidadoDataNascimento","date",0,"px",10,10,"right",null,[],2628,"ConvidadoDataNascimento",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",69,0,"px",17,"px","e20h42_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",70,0,"px",17,"px","e21h42_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",71,0,"px",17,"px","e22h42_client","","Consultar","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(3211,72,"CONVIDADONOMESEMACENTO","Nome Sem Acento","","ConvidadoNomeSemAcento","svchar",0,"px",50,50,"left",null,[],3211,"ConvidadoNomeSemAcento",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TXTTITAPL1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVIDADOID",gxz:"ZV27ConvidadoId",gxold:"OV27ConvidadoId",gxvar:"AV27ConvidadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ConvidadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27ConvidadoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVIDADOID",gx.O.AV27ConvidadoId,0)},c2v:function(){gx.O.AV27ConvidadoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVIDADOID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCHAVEFONETICA",gxz:"ZV32ChaveFonetica",gxold:"OV32ChaveFonetica",gxvar:"AV32ChaveFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV32ChaveFonetica=Value},v2z:function(Value){gx.O.ZV32ChaveFonetica=Value},v2c:function(){gx.fn.setControlValue("vCHAVEFONETICA",gx.O.AV32ChaveFonetica,0)},c2v:function(){gx.O.AV32ChaveFonetica=this.val()},val:function(){return gx.fn.getControlValue("vCHAVEFONETICA")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TXTTITAPL3", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVIDADOCPF",gxz:"ZV29ConvidadoCPF",gxold:"OV29ConvidadoCPF",gxvar:"AV29ConvidadoCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29ConvidadoCPF=Value},v2z:function(Value){gx.O.ZV29ConvidadoCPF=Value},v2c:function(){gx.fn.setControlValue("vCONVIDADOCPF",gx.O.AV29ConvidadoCPF,0)},c2v:function(){gx.O.AV29ConvidadoCPF=this.val()},val:function(){return gx.fn.getControlValue("vCONVIDADOCPF")},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TXTTITAPL2", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVIDADONOME",gxz:"ZV28ConvidadoNome",gxold:"OV28ConvidadoNome",gxvar:"AV28ConvidadoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28ConvidadoNome=Value},v2z:function(Value){gx.O.ZV28ConvidadoNome=Value},v2c:function(){gx.fn.setControlValue("vCONVIDADONOME",gx.O.AV28ConvidadoNome,0)},c2v:function(){gx.O.AV28ConvidadoNome=this.val()},val:function(){return gx.fn.getControlValue("vCONVIDADONOME")},nac:gx.falseFn};
   GXValidFnc[25]={fld:"TXTTITAPL4", format:0,grid:0};
   GXValidFnc[27]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVIDADORG",gxz:"ZV30ConvidadoRG",gxold:"OV30ConvidadoRG",gxvar:"AV30ConvidadoRG",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ConvidadoRG=Value},v2z:function(Value){gx.O.ZV30ConvidadoRG=Value},v2c:function(){gx.fn.setControlValue("vCONVIDADORG",gx.O.AV30ConvidadoRG,0)},c2v:function(){gx.O.AV30ConvidadoRG=this.val()},val:function(){return gx.fn.getControlValue("vCONVIDADORG")},nac:gx.falseFn};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBUSCAFONETICA",gxz:"ZV31BuscaFonetica",gxold:"OV31BuscaFonetica",gxvar:"AV31BuscaFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV31BuscaFonetica=Value},v2z:function(Value){gx.O.ZV31BuscaFonetica=Value},v2c:function(){gx.fn.setCheckBoxValue("vBUSCAFONETICA",gx.O.AV31BuscaFonetica,"S")},c2v:function(){gx.O.AV31BuscaFonetica=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAFONETICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[38]={fld:"TABLE4",grid:0};
   GXValidFnc[41]={fld:"TABLE6",grid:0};
   GXValidFnc[44]={fld:"IMAGE2",grid:0};
   GXValidFnc[46]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[48]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[50]={fld:"IMAGE1",grid:0};
   GXValidFnc[52]={fld:"BTNHELP",grid:0};
   GXValidFnc[54]={fld:"TABLE5",grid:0};
   GXValidFnc[57]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[64]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADOID",gxz:"Z2632ConvidadoId",gxold:"O2632ConvidadoId",gxvar:"A2632ConvidadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2632ConvidadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2632ConvidadoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVIDADOID",row || gx.fn.currentGridRowImpl(63),gx.O.A2632ConvidadoId,0)},c2v:function(){gx.O.A2632ConvidadoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONVIDADOID",row || gx.fn.currentGridRowImpl(63),'.')},nac:gx.falseFn};
   GXValidFnc[65]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADONOME",gxz:"Z2625ConvidadoNome",gxold:"O2625ConvidadoNome",gxvar:"A2625ConvidadoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2625ConvidadoNome=Value},v2z:function(Value){gx.O.Z2625ConvidadoNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONVIDADONOME",row || gx.fn.currentGridRowImpl(63),gx.O.A2625ConvidadoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2625ConvidadoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVIDADONOME",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[66]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADOCPF",gxz:"Z2626ConvidadoCPF",gxold:"O2626ConvidadoCPF",gxvar:"A2626ConvidadoCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2626ConvidadoCPF=Value},v2z:function(Value){gx.O.Z2626ConvidadoCPF=Value},v2c:function(row){gx.fn.setGridControlValue("CONVIDADOCPF",row || gx.fn.currentGridRowImpl(63),gx.O.A2626ConvidadoCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2626ConvidadoCPF=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVIDADOCPF",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[67]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADORG",gxz:"Z2627ConvidadoRG",gxold:"O2627ConvidadoRG",gxvar:"A2627ConvidadoRG",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2627ConvidadoRG=Value},v2z:function(Value){gx.O.Z2627ConvidadoRG=Value},v2c:function(row){gx.fn.setGridControlValue("CONVIDADORG",row || gx.fn.currentGridRowImpl(63),gx.O.A2627ConvidadoRG,0)},c2v:function(){gx.O.A2627ConvidadoRG=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVIDADORG",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[68]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADODATANASCIMENTO",gxz:"Z2628ConvidadoDataNascimento",gxold:"O2628ConvidadoDataNascimento",gxvar:"A2628ConvidadoDataNascimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2628ConvidadoDataNascimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2628ConvidadoDataNascimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVIDADODATANASCIMENTO",row || gx.fn.currentGridRowImpl(63),gx.O.A2628ConvidadoDataNascimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2628ConvidadoDataNascimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONVIDADODATANASCIMENTO",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[69]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(63),gx.O.AV7bmpAlt,gx.O.AV40Bmpalt_GXI)},c2v:function(){gx.O.AV40Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV40Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[70]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(63),gx.O.AV8bmpExc,gx.O.AV41Bmpexc_GXI)},c2v:function(){gx.O.AV41Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV41Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[71]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(63),gx.O.AV16bmpCon,gx.O.AV42Bmpcon_GXI)},c2v:function(){gx.O.AV42Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(63))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(63))}, gxvar_GXI:'AV42Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[72]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:63,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADONOMESEMACENTO",gxz:"Z3211ConvidadoNomeSemAcento",gxold:"O3211ConvidadoNomeSemAcento",gxvar:"A3211ConvidadoNomeSemAcento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3211ConvidadoNomeSemAcento=Value},v2z:function(Value){gx.O.Z3211ConvidadoNomeSemAcento=Value},v2c:function(row){gx.fn.setGridControlValue("CONVIDADONOMESEMACENTO",row || gx.fn.currentGridRowImpl(63),gx.O.A3211ConvidadoNomeSemAcento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3211ConvidadoNomeSemAcento=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVIDADONOMESEMACENTO",row || gx.fn.currentGridRowImpl(63))},nac:gx.falseFn};
   GXValidFnc[79]={fld:"JS", format:2,grid:0};
   GXValidFnc[80]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV27ConvidadoId = 0 ;
   this.ZV27ConvidadoId = 0 ;
   this.OV27ConvidadoId = 0 ;
   this.AV32ChaveFonetica = "" ;
   this.ZV32ChaveFonetica = "" ;
   this.OV32ChaveFonetica = "" ;
   this.AV29ConvidadoCPF = "" ;
   this.ZV29ConvidadoCPF = "" ;
   this.OV29ConvidadoCPF = "" ;
   this.AV28ConvidadoNome = "" ;
   this.ZV28ConvidadoNome = "" ;
   this.OV28ConvidadoNome = "" ;
   this.AV30ConvidadoRG = "" ;
   this.ZV30ConvidadoRG = "" ;
   this.OV30ConvidadoRG = "" ;
   this.AV31BuscaFonetica = "" ;
   this.ZV31BuscaFonetica = "" ;
   this.OV31BuscaFonetica = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z2632ConvidadoId = 0 ;
   this.O2632ConvidadoId = 0 ;
   this.Z2625ConvidadoNome = "" ;
   this.O2625ConvidadoNome = "" ;
   this.Z2626ConvidadoCPF = "" ;
   this.O2626ConvidadoCPF = "" ;
   this.Z2627ConvidadoRG = "" ;
   this.O2627ConvidadoRG = "" ;
   this.Z2628ConvidadoDataNascimento = gx.date.nullDate() ;
   this.O2628ConvidadoDataNascimento = gx.date.nullDate() ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.Z3211ConvidadoNomeSemAcento = "" ;
   this.O3211ConvidadoNomeSemAcento = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.AV27ConvidadoId = 0 ;
   this.AV32ChaveFonetica = "" ;
   this.AV29ConvidadoCPF = "" ;
   this.AV28ConvidadoNome = "" ;
   this.AV30ConvidadoRG = "" ;
   this.AV31BuscaFonetica = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.A2631ConvidadoEmpresaid = "" ;
   this.A2632ConvidadoId = 0 ;
   this.A2625ConvidadoNome = "" ;
   this.A2626ConvidadoCPF = "" ;
   this.A2627ConvidadoRG = "" ;
   this.A2628ConvidadoDataNascimento = gx.date.nullDate() ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.A3211ConvidadoNomeSemAcento = "" ;
   this.AV17EmpresaPadrao = "" ;
   this.AV34SnRecuperaFiltro = "" ;
   this.Events = {"e11h42_client": ["'ANTERIOR'", true] ,"e12h42_client": ["'PROXIMO'", true] ,"e17h42_client": ["VPAGINA.CLICK", true] ,"e13h42_client": ["'NOVO'", true] ,"e14h42_client": ["'FECHAR'", true] ,"e15h42_client": ["'IMPRIMIR'", true] ,"e16h42_client": ["'PROCURAR'", true] ,"e20h42_client": ["'ALTERAR'", true] ,"e21h42_client": ["'EXCLUIR'", true] ,"e22h42_client": ["'CONSULTAR'", true] ,"e23h42_client": ["'ATUALIZAPAGINA'", true] ,"e25h42_client": ["ENTER", true] ,"e26h42_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV29ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV28ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV30ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV29ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV28ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV30ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{ctrl:'CONVIDADOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVIDADOID","Title")',ctrl:'CONVIDADOID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'CONVIDADONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVIDADONOME","Title")',ctrl:'CONVIDADONOME',prop:'Title'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV23filtros',fld:'vFILTROS'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'},{av:'AV28ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV29ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV30ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV29ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV28ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV30ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV29ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV28ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV30ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV29ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV28ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV30ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'},{av:'AV28ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV29ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV30ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'}],[{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'IMPRIMIR'"] = [[{av:'AV38Pgmname',fld:'vPGMNAME'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'},{av:'AV28ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV29ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV30ConvidadoRG',fld:'vCONVIDADORG'}],[{av:'AV20OrdenacaoDescricao',fld:'vORDENACAODESCRICAO'},{av:'AV19NomeRelativo',fld:'vNOMERELATIVO'},{av:'AV18NomeAbsoluto',fld:'vNOMEABSOLUTO'},{av:'AV35QtdPagGeradas',fld:'vQTDPAGGERADAS'},{av:'AV30ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV29ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV28ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV29ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV28ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV30ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'},{av:'AV28ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV29ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV30ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'}],[{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'},{av:'AV28ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV29ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV30ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'}],[{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'},{av:'AV28ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV29ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV30ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'}],[{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'AV23filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV27ConvidadoId',fld:'vCONVIDADOID'},{av:'AV32ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV29ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV28ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV30ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV31BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV17EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV34SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV34SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[27]);
   GridContainer.addRefreshingVar(this.GXValidFnc[31]);
   GridContainer.addRefreshingVar(this.GXValidFnc[80]);
   GridContainer.addRefreshingVar({rfrVar:"AV17EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV7bmpAlt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV8bmpExc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Value", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV16bmpCon", rfrProp:"Tooltiptext", gxAttId:"Bmpcon"});
   GridContainer.addRefreshingVar({rfrVar:"AV34SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconvidado());
