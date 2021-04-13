/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:37:57.62
*/
gx.evt.autoSkip = false;
gx.define('hconsultaconvidado', false, function () {
   this.ServerClass =  "hconsultaconvidado" ;
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
      this.AV24ConvidadoIdIN=gx.fn.getIntegerValue("vCONVIDADOIDIN",'.') ;
      this.AV25SnParametro=gx.fn.getControlValue("vSNPARAMETRO") ;
      this.AV31SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.AV17OutConvidadoId=gx.fn.getIntegerValue("vOUTCONVIDADOID",'.') ;
   };
   this.e18h12_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11h12_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12h12_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13h12_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14h12_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e16h12_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e15h12_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20h12_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21h12_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e22h12_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e24h11_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,14,17,19,22,24,27,29,33,39,40,41,42,43,44,45,46,52,55,58,60,62,64,66,67,68,69,70];
   this.GXLastCtrlId =70;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",38,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultaconvidado",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(2632,39,"CONVIDADOID","","","ConvidadoId","int",0,"px",6,6,"right",null,[],2632,"ConvidadoId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(2625,40,"CONVIDADONOME","","","ConvidadoNome","svchar",0,"px",50,50,"left",null,[],2625,"ConvidadoNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2626,41,"CONVIDADOCPF","CPF do Convidado","","ConvidadoCPF","char",0,"px",14,14,"left",null,[],2626,"ConvidadoCPF",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2627,42,"CONVIDADORG","RG do Convidado","","ConvidadoRG","svchar",0,"px",20,20,"left",null,[],2627,"ConvidadoRG",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(2628,43,"CONVIDADODATANASCIMENTO","Nascimento","","ConvidadoDataNascimento","date",0,"px",10,10,"right",null,[],2628,"ConvidadoDataNascimento",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",44,0,"px",17,"px","e21h12_client","","Alt","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",45,0,"px",17,"px","e22h12_client","","Exc","Image","GridColumnImage");
   GridContainer.addSingleLineEdit(3211,46,"CONVIDADONOMESEMACENTO","Nome Sem Acento","","ConvidadoNomeSemAcento","svchar",0,"px",50,50,"left",null,[],3211,"ConvidadoNomeSemAcento",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVIDADOID",gxz:"ZV15ConvidadoId",gxold:"OV15ConvidadoId",gxvar:"AV15ConvidadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV15ConvidadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV15ConvidadoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCONVIDADOID",gx.O.AV15ConvidadoId,0)},c2v:function(){gx.O.AV15ConvidadoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCONVIDADOID",'.')},nac:gx.falseFn};
   GXValidFnc[14]={lvl:0,type:"svchar",len:100,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCHAVEFONETICA",gxz:"ZV22ChaveFonetica",gxold:"OV22ChaveFonetica",gxvar:"AV22ChaveFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV22ChaveFonetica=Value},v2z:function(Value){gx.O.ZV22ChaveFonetica=Value},v2c:function(){gx.fn.setControlValue("vCHAVEFONETICA",gx.O.AV22ChaveFonetica,0)},c2v:function(){gx.O.AV22ChaveFonetica=this.val()},val:function(){return gx.fn.getControlValue("vCHAVEFONETICA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:50,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVIDADONOME",gxz:"ZV16ConvidadoNome",gxold:"OV16ConvidadoNome",gxvar:"AV16ConvidadoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16ConvidadoNome=Value},v2z:function(Value){gx.O.ZV16ConvidadoNome=Value},v2c:function(){gx.fn.setControlValue("vCONVIDADONOME",gx.O.AV16ConvidadoNome,0)},c2v:function(){gx.O.AV16ConvidadoNome=this.val()},val:function(){return gx.fn.getControlValue("vCONVIDADONOME")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVIDADOCPF",gxz:"ZV19ConvidadoCPF",gxold:"OV19ConvidadoCPF",gxvar:"AV19ConvidadoCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV19ConvidadoCPF=Value},v2z:function(Value){gx.O.ZV19ConvidadoCPF=Value},v2c:function(){gx.fn.setControlValue("vCONVIDADOCPF",gx.O.AV19ConvidadoCPF,0)},c2v:function(){gx.O.AV19ConvidadoCPF=this.val()},val:function(){return gx.fn.getControlValue("vCONVIDADOCPF")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"svchar",len:20,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vCONVIDADORG",gxz:"ZV20ConvidadoRG",gxold:"OV20ConvidadoRG",gxvar:"AV20ConvidadoRG",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV20ConvidadoRG=Value},v2z:function(Value){gx.O.ZV20ConvidadoRG=Value},v2c:function(){gx.fn.setControlValue("vCONVIDADORG",gx.O.AV20ConvidadoRG,0)},c2v:function(){gx.O.AV20ConvidadoRG=this.val()},val:function(){return gx.fn.getControlValue("vCONVIDADORG")},nac:gx.falseFn};
   GXValidFnc[33]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vBUSCAFONETICA",gxz:"ZV21BuscaFonetica",gxold:"OV21BuscaFonetica",gxvar:"AV21BuscaFonetica",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"checkbox",v2v:function(Value){gx.O.AV21BuscaFonetica=Value},v2z:function(Value){gx.O.ZV21BuscaFonetica=Value},v2c:function(){gx.fn.setCheckBoxValue("vBUSCAFONETICA",gx.O.AV21BuscaFonetica,"S")},c2v:function(){gx.O.AV21BuscaFonetica=this.val()},val:function(){return gx.fn.getControlValue("vBUSCAFONETICA")},nac:gx.falseFn,values:['S','N']};
   GXValidFnc[39]={lvl:2,type:"int",len:6,dec:0,sign:false,pic:"ZZZZZ9",ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADOID",gxz:"Z2632ConvidadoId",gxold:"O2632ConvidadoId",gxvar:"A2632ConvidadoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2632ConvidadoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z2632ConvidadoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVIDADOID",row || gx.fn.currentGridRowImpl(38),gx.O.A2632ConvidadoId,0)},c2v:function(){gx.O.A2632ConvidadoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONVIDADOID",row || gx.fn.currentGridRowImpl(38),'.')},nac:gx.falseFn};
   GXValidFnc[40]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADONOME",gxz:"Z2625ConvidadoNome",gxold:"O2625ConvidadoNome",gxvar:"A2625ConvidadoNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2625ConvidadoNome=Value},v2z:function(Value){gx.O.Z2625ConvidadoNome=Value},v2c:function(row){gx.fn.setGridControlValue("CONVIDADONOME",row || gx.fn.currentGridRowImpl(38),gx.O.A2625ConvidadoNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2625ConvidadoNome=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVIDADONOME",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[41]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADOCPF",gxz:"Z2626ConvidadoCPF",gxold:"O2626ConvidadoCPF",gxvar:"A2626ConvidadoCPF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2626ConvidadoCPF=Value},v2z:function(Value){gx.O.Z2626ConvidadoCPF=Value},v2c:function(row){gx.fn.setGridControlValue("CONVIDADOCPF",row || gx.fn.currentGridRowImpl(38),gx.O.A2626ConvidadoCPF,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2626ConvidadoCPF=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVIDADOCPF",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[42]={lvl:2,type:"svchar",len:20,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADORG",gxz:"Z2627ConvidadoRG",gxold:"O2627ConvidadoRG",gxvar:"A2627ConvidadoRG",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A2627ConvidadoRG=Value},v2z:function(Value){gx.O.Z2627ConvidadoRG=Value},v2c:function(row){gx.fn.setGridControlValue("CONVIDADORG",row || gx.fn.currentGridRowImpl(38),gx.O.A2627ConvidadoRG,0)},c2v:function(){gx.O.A2627ConvidadoRG=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVIDADORG",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADODATANASCIMENTO",gxz:"Z2628ConvidadoDataNascimento",gxold:"O2628ConvidadoDataNascimento",gxvar:"A2628ConvidadoDataNascimento",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A2628ConvidadoDataNascimento=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z2628ConvidadoDataNascimento=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("CONVIDADODATANASCIMENTO",row || gx.fn.currentGridRowImpl(38),gx.O.A2628ConvidadoDataNascimento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A2628ConvidadoDataNascimento=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("CONVIDADODATANASCIMENTO",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV29bmpalt",gxold:"OV29bmpalt",gxvar:"AV29bmpalt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV29bmpalt=Value},v2z:function(Value){gx.O.ZV29bmpalt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(38),gx.O.AV29bmpalt,gx.O.AV36Bmpalt_GXI)},c2v:function(){gx.O.AV36Bmpalt_GXI=this.val_GXI();gx.O.AV29bmpalt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(38))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(38))}, gxvar_GXI:'AV36Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV30bmpexc",gxold:"OV30bmpexc",gxvar:"AV30bmpexc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV30bmpexc=Value},v2z:function(Value){gx.O.ZV30bmpexc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(38),gx.O.AV30bmpexc,gx.O.AV37Bmpexc_GXI)},c2v:function(){gx.O.AV37Bmpexc_GXI=this.val_GXI();gx.O.AV30bmpexc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(38))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(38))}, gxvar_GXI:'AV37Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"svchar",len:50,dec:0,sign:false,ro:1,isacc:0,grid:38,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"CONVIDADONOMESEMACENTO",gxz:"Z3211ConvidadoNomeSemAcento",gxold:"O3211ConvidadoNomeSemAcento",gxvar:"A3211ConvidadoNomeSemAcento",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3211ConvidadoNomeSemAcento=Value},v2z:function(Value){gx.O.Z3211ConvidadoNomeSemAcento=Value},v2c:function(row){gx.fn.setGridControlValue("CONVIDADONOMESEMACENTO",row || gx.fn.currentGridRowImpl(38),gx.O.A3211ConvidadoNomeSemAcento,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A3211ConvidadoNomeSemAcento=this.val()},val:function(row){return gx.fn.getGridControlValue("CONVIDADONOMESEMACENTO",row || gx.fn.currentGridRowImpl(38))},nac:gx.falseFn};
   GXValidFnc[52]={fld:"TABLENAV",grid:0};
   GXValidFnc[55]={fld:"BTNADD",grid:0};
   GXValidFnc[58]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[60]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[62]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[64]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[66]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[67]={fld:"JS", format:2,grid:0};
   GXValidFnc[68]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV27Pagina",gxold:"OV27Pagina",gxvar:"AV27Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV27Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV27Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV27Pagina)},c2v:function(){gx.O.AV27Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV28PaginaAux",gxold:"OV28PaginaAux",gxvar:"AV28PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV28PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV28PaginaAux,0)},c2v:function(){gx.O.AV28PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV15ConvidadoId = 0 ;
   this.ZV15ConvidadoId = 0 ;
   this.OV15ConvidadoId = 0 ;
   this.AV22ChaveFonetica = "" ;
   this.ZV22ChaveFonetica = "" ;
   this.OV22ChaveFonetica = "" ;
   this.AV16ConvidadoNome = "" ;
   this.ZV16ConvidadoNome = "" ;
   this.OV16ConvidadoNome = "" ;
   this.AV19ConvidadoCPF = "" ;
   this.ZV19ConvidadoCPF = "" ;
   this.OV19ConvidadoCPF = "" ;
   this.AV20ConvidadoRG = "" ;
   this.ZV20ConvidadoRG = "" ;
   this.OV20ConvidadoRG = "" ;
   this.AV21BuscaFonetica = "" ;
   this.ZV21BuscaFonetica = "" ;
   this.OV21BuscaFonetica = "" ;
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
   this.ZV29bmpalt = "" ;
   this.OV29bmpalt = "" ;
   this.ZV30bmpexc = "" ;
   this.OV30bmpexc = "" ;
   this.Z3211ConvidadoNomeSemAcento = "" ;
   this.O3211ConvidadoNomeSemAcento = "" ;
   this.AV27Pagina = 0 ;
   this.ZV27Pagina = 0 ;
   this.OV27Pagina = 0 ;
   this.AV28PaginaAux = 0 ;
   this.ZV28PaginaAux = 0 ;
   this.OV28PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV15ConvidadoId = 0 ;
   this.AV22ChaveFonetica = "" ;
   this.AV16ConvidadoNome = "" ;
   this.AV19ConvidadoCPF = "" ;
   this.AV20ConvidadoRG = "" ;
   this.AV21BuscaFonetica = "" ;
   this.AV27Pagina = 0 ;
   this.AV28PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV17OutConvidadoId = 0 ;
   this.AV24ConvidadoIdIN = 0 ;
   this.A2631ConvidadoEmpresaid = "" ;
   this.A2632ConvidadoId = 0 ;
   this.A2625ConvidadoNome = "" ;
   this.A2626ConvidadoCPF = "" ;
   this.A2627ConvidadoRG = "" ;
   this.A2628ConvidadoDataNascimento = gx.date.nullDate() ;
   this.AV29bmpalt = "" ;
   this.AV30bmpexc = "" ;
   this.A3211ConvidadoNomeSemAcento = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.AV25SnParametro = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.Events = {"e18h12_client": ["ENTER", true] ,"e11h12_client": ["'GXM_FIRST'", true] ,"e12h12_client": ["'GXM_PREVIOUS'", true] ,"e13h12_client": ["'GXM_NEXT'", true] ,"e14h12_client": ["'GXM_LAST'", true] ,"e16h12_client": ["'NOVO'", true] ,"e15h12_client": ["'PROCURAR'", true] ,"e20h12_client": ["'ATUALIZAPAGINA'", true] ,"e21h12_client": ["'ALTERAR'", true] ,"e22h12_client": ["'EXCLUIR'", true] ,"e24h11_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ConvidadoId',fld:'vCONVIDADOID'},{av:'AV22ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV16ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV19ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV20ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV21BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29bmpalt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV30bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV24ConvidadoIdIN',fld:'vCONVIDADOIDIN',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{av:'AV15ConvidadoId',fld:'vCONVIDADOID'},{av:'AV16ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV19ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV20ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{ctrl:'CONVIDADOID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVIDADOID","Title")',ctrl:'CONVIDADOID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'CONVIDADONOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("CONVIDADONOME","Title")',ctrl:'CONVIDADONOME',prop:'Title'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV26NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'},{av:'AV32filtros',fld:'vFILTROS'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV23SnBuscaFonetica',fld:'vSNBUSCAFONETICA'}]];
   this.EvtParms["ENTER"] = [[{av:'A2632ConvidadoId',fld:'CONVIDADOID'}],[{av:'AV17OutConvidadoId',fld:'vOUTCONVIDADOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ConvidadoId',fld:'vCONVIDADOID'},{av:'AV22ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV16ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV19ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV20ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV21BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29bmpalt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV30bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV24ConvidadoIdIN',fld:'vCONVIDADOIDIN',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV23SnBuscaFonetica',fld:'vSNBUSCAFONETICA'}],[{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV32filtros',fld:'vFILTROS'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ConvidadoId',fld:'vCONVIDADOID'},{av:'AV22ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV16ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV19ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV20ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV21BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29bmpalt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV30bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV24ConvidadoIdIN',fld:'vCONVIDADOIDIN',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV23SnBuscaFonetica',fld:'vSNBUSCAFONETICA'}],[{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV32filtros',fld:'vFILTROS'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ConvidadoId',fld:'vCONVIDADOID'},{av:'AV22ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV16ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV19ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV20ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV21BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29bmpalt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV30bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV24ConvidadoIdIN',fld:'vCONVIDADOIDIN',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'},{av:'AV23SnBuscaFonetica',fld:'vSNBUSCAFONETICA'}],[{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV32filtros',fld:'vFILTROS'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ConvidadoId',fld:'vCONVIDADOID'},{av:'AV22ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV16ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV19ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV20ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV21BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29bmpalt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV30bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV24ConvidadoIdIN',fld:'vCONVIDADOIDIN',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'AV28PaginaAux',fld:'vPAGINAAUX'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV23SnBuscaFonetica',fld:'vSNBUSCAFONETICA'}],[{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV32filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV15ConvidadoId',fld:'vCONVIDADOID'},{av:'AV16ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV19ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV20ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV23SnBuscaFonetica',fld:'vSNBUSCAFONETICA'}],[{av:'AV32filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ConvidadoId',fld:'vCONVIDADOID'},{av:'AV22ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV16ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV19ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV20ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV21BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29bmpalt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV30bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV24ConvidadoIdIN',fld:'vCONVIDADOIDIN',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV22ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV27Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV15ConvidadoId',fld:'vCONVIDADOID'},{av:'AV22ChaveFonetica',fld:'vCHAVEFONETICA'},{av:'AV16ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV19ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV20ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV21BuscaFonetica',fld:'vBUSCAFONETICA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'AV29bmpalt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV30bmpexc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV24ConvidadoIdIN',fld:'vCONVIDADOIDIN',hsh:true},{av:'AV25SnParametro',fld:'vSNPARAMETRO'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'}],[]];
   this.EvtParms["'ALTERAR'"] = [[{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV15ConvidadoId',fld:'vCONVIDADOID'},{av:'AV16ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV19ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV20ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV23SnBuscaFonetica',fld:'vSNBUSCAFONETICA'}],[{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'AV32filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'AV27Pagina',fld:'vPAGINA'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV15ConvidadoId',fld:'vCONVIDADOID'},{av:'AV16ConvidadoNome',fld:'vCONVIDADONOME'},{av:'AV19ConvidadoCPF',fld:'vCONVIDADOCPF'},{av:'AV20ConvidadoRG',fld:'vCONVIDADORG'},{av:'AV23SnBuscaFonetica',fld:'vSNBUSCAFONETICA'}],[{av:'A2632ConvidadoId',fld:'CONVIDADOID'},{av:'AV32filtros',fld:'vFILTROS'}]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV24ConvidadoIdIN", "vCONVIDADOIDIN", 0, "int");
   this.setVCMap("AV25SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("AV17OutConvidadoId", "vOUTCONVIDADOID", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("AV24ConvidadoIdIN", "vCONVIDADOIDIN", 0, "int");
   this.setVCMap("AV25SnParametro", "vSNPARAMETRO", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[14]);
   GridContainer.addRefreshingVar(this.GXValidFnc[19]);
   GridContainer.addRefreshingVar(this.GXValidFnc[24]);
   GridContainer.addRefreshingVar(this.GXValidFnc[29]);
   GridContainer.addRefreshingVar(this.GXValidFnc[33]);
   GridContainer.addRefreshingVar(this.GXValidFnc[70]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpalt", rfrProp:"Value", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV29bmpalt", rfrProp:"Tooltiptext", gxAttId:"Bmpalt"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpexc", rfrProp:"Value", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV30bmpexc", rfrProp:"Tooltiptext", gxAttId:"Bmpexc"});
   GridContainer.addRefreshingVar({rfrVar:"AV24ConvidadoIdIN"});
   GridContainer.addRefreshingVar({rfrVar:"AV25SnParametro"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultaconvidado());
