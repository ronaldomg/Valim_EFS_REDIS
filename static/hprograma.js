/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:52:44.39
*/
gx.evt.autoSkip = false;
gx.define('hprograma', false, function () {
   this.ServerClass =  "hprograma" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = false;
   this.skipOnEnter = false;
   this.addKeyListener("7", "'ANTERIOR'");
   this.addKeyListener("8", "'PROXIMO'");
   this.addKeyListener("3", "'NOVO'");
   this.addKeyListener("12", "'FECHAR'");
   this.addKeyListener("5", "'PROCURAR'");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV19SistemaId=gx.fn.getControlValue("vSISTEMAID") ;
      this.AV31SnRecuperaFiltro=gx.fn.getControlValue("vSNRECUPERAFILTRO") ;
      this.A499ProgramaAtivo=gx.fn.getControlValue("PROGRAMAATIVO") ;
   };
   this.e113d2_client=function()
   {
      this.executeServerEvent("'ANTERIOR'", true, null, false, false);
   };
   this.e123d2_client=function()
   {
      this.executeServerEvent("'PROXIMO'", true, null, false, false);
   };
   this.e203d2_client=function()
   {
      this.executeServerEvent("'ALTERAR'", true, arguments[0], false, false);
   };
   this.e213d2_client=function()
   {
      this.executeServerEvent("'EXCLUIR'", true, arguments[0], false, false);
   };
   this.e223d2_client=function()
   {
      this.executeServerEvent("'CONSULTAR'", true, arguments[0], false, false);
   };
   this.e163d2_client=function()
   {
      this.executeServerEvent("VPAGINA.CLICK", true, null, false, true);
   };
   this.e133d2_client=function()
   {
      this.executeServerEvent("'NOVO'", true, null, false, false);
   };
   this.e143d2_client=function()
   {
      this.executeServerEvent("'FECHAR'", false, null, false, false);
   };
   this.e153d2_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e233d2_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e243d2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e253d2_client=function()
   {
      this.executeServerEvent("CANCEL", true, arguments[0], false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,16,18,21,23,26,28,31,33,36,38,40,50,53,56,58,60,62,64,67,69,70,74,75,76,77,78,79,80,81,82,89];
   this.GXLastCtrlId =89;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",73,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hprograma",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(141,74,"PROGRAMAID","","","ProgramaId","int",0,"px",4,4,"right",null,[],141,"ProgramaId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(145,75,"PROGRAMANOME","","","ProgramaNome","svchar",0,"px",40,40,"left",null,[],145,"ProgramaNome",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit(498,76,"PROGRAMALINK","","","ProgramaLink","svchar",0,"px",40,40,"left",null,[],498,"ProgramaLink",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addComboBox(497,77,"PROGRAMATIPO","","ProgramaTipo","char",null,0,true,false,0,"px","");
   GridContainer.addComboBox(500,78,"PROGRAMAPRIVILEGIO","","ProgramaPrivilegio","char",null,0,true,false,0,"px","");
   GridContainer.addBitmap("&Bmpativo","vBMPATIVO",79,0,"px",17,"px",null,"","Ativo","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpalt","vBMPALT",80,0,"px",17,"px","e203d2_client","","Alterar","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpexc","vBMPEXC",81,0,"px",17,"px","e213d2_client","","Excluir","Image","GridColumnImage");
   GridContainer.addBitmap("&Bmpcon","vBMPCON",82,0,"px",17,"px","e223d2_client","","Consultar","Image","GridColumnImage");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLE2",grid:0};
   GXValidFnc[5]={fld:"TABLE8",grid:0};
   GXValidFnc[8]={fld:"TABLE9",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:8,dec:0,sign:false,pic:"@!",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"SISTEMAID",gxz:"Z140SistemaId",gxold:"O140SistemaId",gxvar:"A140SistemaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A140SistemaId=Value},v2z:function(Value){gx.O.Z140SistemaId=Value},v2c:function(){gx.fn.setControlValue("SISTEMAID",gx.O.A140SistemaId,0)},c2v:function(){gx.O.A140SistemaId=this.val()},val:function(){return gx.fn.getControlValue("SISTEMAID")},nac:gx.falseFn};
   GXValidFnc[16]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[18]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROGRAMAID",gxz:"ZV23ProgramaId",gxold:"OV23ProgramaId",gxvar:"AV23ProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV23ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV23ProgramaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPROGRAMAID",gx.O.AV23ProgramaId,0)},c2v:function(){gx.O.AV23ProgramaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPROGRAMAID",'.')},nac:gx.falseFn};
   GXValidFnc[21]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[23]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROGRAMALINK",gxz:"ZV30ProgramaLink",gxold:"OV30ProgramaLink",gxvar:"AV30ProgramaLink",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV30ProgramaLink=Value},v2z:function(Value){gx.O.ZV30ProgramaLink=Value},v2c:function(){gx.fn.setControlValue("vPROGRAMALINK",gx.O.AV30ProgramaLink,0)},c2v:function(){gx.O.AV30ProgramaLink=this.val()},val:function(){return gx.fn.getControlValue("vPROGRAMALINK")},nac:gx.falseFn};
   GXValidFnc[26]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[28]={lvl:0,type:"svchar",len:40,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROGRAMANOME",gxz:"ZV27ProgramaNome",gxold:"OV27ProgramaNome",gxvar:"AV27ProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV27ProgramaNome=Value},v2z:function(Value){gx.O.ZV27ProgramaNome=Value},v2c:function(){gx.fn.setControlValue("vPROGRAMANOME",gx.O.AV27ProgramaNome,0)},c2v:function(){gx.O.AV27ProgramaNome=this.val()},val:function(){return gx.fn.getControlValue("vPROGRAMANOME")},nac:gx.falseFn};
   GXValidFnc[31]={fld:"ORDEREDTEXT1", format:0,grid:0};
   GXValidFnc[33]={fld:"TABLE1",grid:0};
   GXValidFnc[36]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vTIPOPRIVILEGIO",gxz:"ZV32TipoPrivilegio",gxold:"OV32TipoPrivilegio",gxvar:"AV32TipoPrivilegio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV32TipoPrivilegio=Value},v2z:function(Value){gx.O.ZV32TipoPrivilegio=Value},v2c:function(){gx.fn.setComboBoxValue("vTIPOPRIVILEGIO",gx.O.AV32TipoPrivilegio)},c2v:function(){gx.O.AV32TipoPrivilegio=this.val()},val:function(){return gx.fn.getControlValue("vTIPOPRIVILEGIO")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"ORDEREDTEXT2", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vPROGRAMAINATIVO",gxz:"ZV20ProgramaInativo",gxold:"OV20ProgramaInativo",gxvar:"AV20ProgramaInativo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV20ProgramaInativo=Value},v2z:function(Value){gx.O.ZV20ProgramaInativo=Value},v2c:function(){gx.fn.setComboBoxValue("vPROGRAMAINATIVO",gx.O.AV20ProgramaInativo)},c2v:function(){gx.O.AV20ProgramaInativo=this.val()},val:function(){return gx.fn.getControlValue("vPROGRAMAINATIVO")},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   GXValidFnc[53]={fld:"TABLE3",grid:0};
   GXValidFnc[56]={fld:"IMAGE2",grid:0};
   GXValidFnc[58]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[60]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[62]={fld:"BTNHELP",grid:0};
   GXValidFnc[64]={fld:"TABLE5",grid:0};
   GXValidFnc[67]={fld:"TEXTBLOCK1", format:1,grid:0};
   GXValidFnc[69]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV5Pagina",gxold:"OV5Pagina",gxvar:"AV5Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV5Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV5Pagina)},c2v:function(){gx.O.AV5Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[70]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"Z9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV6PaginaAux",gxold:"OV6PaginaAux",gxvar:"AV6PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV6PaginaAux,0)},c2v:function(){gx.O.AV6PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[74]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMAID",gxz:"Z141ProgramaId",gxold:"O141ProgramaId",gxvar:"A141ProgramaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A141ProgramaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z141ProgramaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROGRAMAID",row || gx.fn.currentGridRowImpl(73),gx.O.A141ProgramaId,0)},c2v:function(){gx.O.A141ProgramaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROGRAMAID",row || gx.fn.currentGridRowImpl(73),'.')},nac:gx.falseFn};
   GXValidFnc[75]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMANOME",gxz:"Z145ProgramaNome",gxold:"O145ProgramaNome",gxvar:"A145ProgramaNome",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A145ProgramaNome=Value},v2z:function(Value){gx.O.Z145ProgramaNome=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMANOME",row || gx.fn.currentGridRowImpl(73),gx.O.A145ProgramaNome,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A145ProgramaNome=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMANOME",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[76]={lvl:2,type:"svchar",len:40,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMALINK",gxz:"Z498ProgramaLink",gxold:"O498ProgramaLink",gxvar:"A498ProgramaLink",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A498ProgramaLink=Value},v2z:function(Value){gx.O.Z498ProgramaLink=Value},v2c:function(row){gx.fn.setGridControlValue("PROGRAMALINK",row || gx.fn.currentGridRowImpl(73),gx.O.A498ProgramaLink,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A498ProgramaLink=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMALINK",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[77]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMATIPO",gxz:"Z497ProgramaTipo",gxold:"O497ProgramaTipo",gxvar:"A497ProgramaTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A497ProgramaTipo=Value},v2z:function(Value){gx.O.Z497ProgramaTipo=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PROGRAMATIPO",row || gx.fn.currentGridRowImpl(73),gx.O.A497ProgramaTipo)},c2v:function(){gx.O.A497ProgramaTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMATIPO",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[78]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"PROGRAMAPRIVILEGIO",gxz:"Z500ProgramaPrivilegio",gxold:"O500ProgramaPrivilegio",gxvar:"A500ProgramaPrivilegio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A500ProgramaPrivilegio=Value},v2z:function(Value){gx.O.Z500ProgramaPrivilegio=Value},v2c:function(row){gx.fn.setGridComboBoxValue("PROGRAMAPRIVILEGIO",row || gx.fn.currentGridRowImpl(73),gx.O.A500ProgramaPrivilegio);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A500ProgramaPrivilegio=this.val()},val:function(row){return gx.fn.getGridControlValue("PROGRAMAPRIVILEGIO",row || gx.fn.currentGridRowImpl(73))},nac:gx.falseFn};
   GXValidFnc[79]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPATIVO",gxz:"ZV17bmpAtivo",gxold:"OV17bmpAtivo",gxvar:"AV17bmpAtivo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV17bmpAtivo=Value},v2z:function(Value){gx.O.ZV17bmpAtivo=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPATIVO",row || gx.fn.currentGridRowImpl(73),gx.O.AV17bmpAtivo,gx.O.AV40Bmpativo_GXI)},c2v:function(){gx.O.AV40Bmpativo_GXI=this.val_GXI();gx.O.AV17bmpAtivo=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPATIVO",row || gx.fn.currentGridRowImpl(73))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPATIVO_GXI",row || gx.fn.currentGridRowImpl(73))}, gxvar_GXI:'AV40Bmpativo_GXI',nac:gx.falseFn};
   GXValidFnc[80]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPALT",gxz:"ZV7bmpAlt",gxold:"OV7bmpAlt",gxvar:"AV7bmpAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV7bmpAlt=Value},v2z:function(Value){gx.O.ZV7bmpAlt=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPALT",row || gx.fn.currentGridRowImpl(73),gx.O.AV7bmpAlt,gx.O.AV37Bmpalt_GXI)},c2v:function(){gx.O.AV37Bmpalt_GXI=this.val_GXI();gx.O.AV7bmpAlt=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPALT",row || gx.fn.currentGridRowImpl(73))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPALT_GXI",row || gx.fn.currentGridRowImpl(73))}, gxvar_GXI:'AV37Bmpalt_GXI',nac:gx.falseFn};
   GXValidFnc[81]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPEXC",gxz:"ZV8bmpExc",gxold:"OV8bmpExc",gxvar:"AV8bmpExc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV8bmpExc=Value},v2z:function(Value){gx.O.ZV8bmpExc=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPEXC",row || gx.fn.currentGridRowImpl(73),gx.O.AV8bmpExc,gx.O.AV38Bmpexc_GXI)},c2v:function(){gx.O.AV38Bmpexc_GXI=this.val_GXI();gx.O.AV8bmpExc=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPEXC",row || gx.fn.currentGridRowImpl(73))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPEXC_GXI",row || gx.fn.currentGridRowImpl(73))}, gxvar_GXI:'AV38Bmpexc_GXI',nac:gx.falseFn};
   GXValidFnc[82]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:73,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPCON",gxz:"ZV16bmpCon",gxold:"OV16bmpCon",gxvar:"AV16bmpCon",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV16bmpCon=Value},v2z:function(Value){gx.O.ZV16bmpCon=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPCON",row || gx.fn.currentGridRowImpl(73),gx.O.AV16bmpCon,gx.O.AV39Bmpcon_GXI)},c2v:function(){gx.O.AV39Bmpcon_GXI=this.val_GXI();gx.O.AV16bmpCon=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPCON",row || gx.fn.currentGridRowImpl(73))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPCON_GXI",row || gx.fn.currentGridRowImpl(73))}, gxvar_GXI:'AV39Bmpcon_GXI',nac:gx.falseFn};
   GXValidFnc[89]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV11OrderedBy",gxold:"OV11OrderedBy",gxvar:"AV11OrderedBy",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11OrderedBy=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV11OrderedBy=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV11OrderedBy,0)},c2v:function(){gx.O.AV11OrderedBy=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.A140SistemaId = "" ;
   this.Z140SistemaId = "" ;
   this.O140SistemaId = "" ;
   this.AV23ProgramaId = 0 ;
   this.ZV23ProgramaId = 0 ;
   this.OV23ProgramaId = 0 ;
   this.AV30ProgramaLink = "" ;
   this.ZV30ProgramaLink = "" ;
   this.OV30ProgramaLink = "" ;
   this.AV27ProgramaNome = "" ;
   this.ZV27ProgramaNome = "" ;
   this.OV27ProgramaNome = "" ;
   this.AV32TipoPrivilegio = "" ;
   this.ZV32TipoPrivilegio = "" ;
   this.OV32TipoPrivilegio = "" ;
   this.AV20ProgramaInativo = "" ;
   this.ZV20ProgramaInativo = "" ;
   this.OV20ProgramaInativo = "" ;
   this.AV5Pagina = 0 ;
   this.ZV5Pagina = 0 ;
   this.OV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.ZV6PaginaAux = 0 ;
   this.OV6PaginaAux = 0 ;
   this.Z141ProgramaId = 0 ;
   this.O141ProgramaId = 0 ;
   this.Z145ProgramaNome = "" ;
   this.O145ProgramaNome = "" ;
   this.Z498ProgramaLink = "" ;
   this.O498ProgramaLink = "" ;
   this.Z497ProgramaTipo = "" ;
   this.O497ProgramaTipo = "" ;
   this.Z500ProgramaPrivilegio = "" ;
   this.O500ProgramaPrivilegio = "" ;
   this.ZV17bmpAtivo = "" ;
   this.OV17bmpAtivo = "" ;
   this.ZV7bmpAlt = "" ;
   this.OV7bmpAlt = "" ;
   this.ZV8bmpExc = "" ;
   this.OV8bmpExc = "" ;
   this.ZV16bmpCon = "" ;
   this.OV16bmpCon = "" ;
   this.AV11OrderedBy = 0 ;
   this.ZV11OrderedBy = 0 ;
   this.OV11OrderedBy = 0 ;
   this.A140SistemaId = "" ;
   this.AV23ProgramaId = 0 ;
   this.AV30ProgramaLink = "" ;
   this.AV27ProgramaNome = "" ;
   this.AV32TipoPrivilegio = "" ;
   this.AV20ProgramaInativo = "" ;
   this.AV5Pagina = 0 ;
   this.AV6PaginaAux = 0 ;
   this.AV11OrderedBy = 0 ;
   this.AV19SistemaId = "" ;
   this.A499ProgramaAtivo = "" ;
   this.A141ProgramaId = 0 ;
   this.A145ProgramaNome = "" ;
   this.A498ProgramaLink = "" ;
   this.A497ProgramaTipo = "" ;
   this.A500ProgramaPrivilegio = "" ;
   this.AV17bmpAtivo = "" ;
   this.AV7bmpAlt = "" ;
   this.AV8bmpExc = "" ;
   this.AV16bmpCon = "" ;
   this.AV31SnRecuperaFiltro = "" ;
   this.Events = {"e113d2_client": ["'ANTERIOR'", true] ,"e123d2_client": ["'PROXIMO'", true] ,"e203d2_client": ["'ALTERAR'", true] ,"e213d2_client": ["'EXCLUIR'", true] ,"e223d2_client": ["'CONSULTAR'", true] ,"e163d2_client": ["VPAGINA.CLICK", true] ,"e133d2_client": ["'NOVO'", true] ,"e143d2_client": ["'FECHAR'", true] ,"e153d2_client": ["'PROCURAR'", true] ,"e233d2_client": ["'ATUALIZAPAGINA'", true] ,"e243d2_client": ["ENTER", true] ,"e253d2_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23ProgramaId',fld:'vPROGRAMAID'},{av:'AV30ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV27ProgramaNome',fld:'vPROGRAMANOME'},{av:'AV32TipoPrivilegio',fld:'vTIPOPRIVILEGIO'},{av:'AV20ProgramaInativo',fld:'vPROGRAMAINATIVO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A499ProgramaAtivo',fld:'PROGRAMAATIVO'}],[]];
   this.EvtParms["GRID.REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23ProgramaId',fld:'vPROGRAMAID'},{av:'AV30ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV27ProgramaNome',fld:'vPROGRAMANOME'},{av:'AV32TipoPrivilegio',fld:'vTIPOPRIVILEGIO'},{av:'AV20ProgramaInativo',fld:'vPROGRAMAINATIVO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A499ProgramaAtivo',fld:'PROGRAMAATIVO'}],[{ctrl:'PROGRAMAID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMAID","Title")',ctrl:'PROGRAMAID',prop:'Title'},{av:'AV12Imagem',fld:'vIMAGEM'},{ctrl:'PROGRAMANOME',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMANOME","Title")',ctrl:'PROGRAMANOME',prop:'Title'},{ctrl:'PROGRAMALINK',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("PROGRAMALINK","Title")',ctrl:'PROGRAMALINK',prop:'Title'},{ctrl:'PROGRAMATIPO'},{ctrl:'PROGRAMAPRIVILEGIO'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV10NumPagina',fld:'vNUMPAGINA'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'AV28filtros',fld:'vFILTROS'},{av:'AV23ProgramaId',fld:'vPROGRAMAID'},{av:'AV27ProgramaNome',fld:'vPROGRAMANOME'},{av:'AV32TipoPrivilegio',fld:'vTIPOPRIVILEGIO'},{av:'AV20ProgramaInativo',fld:'vPROGRAMAINATIVO'},{av:'AV30ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}]];
   this.EvtParms["'ANTERIOR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23ProgramaId',fld:'vPROGRAMAID'},{av:'AV30ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV27ProgramaNome',fld:'vPROGRAMANOME'},{av:'AV32TipoPrivilegio',fld:'vTIPOPRIVILEGIO'},{av:'AV20ProgramaInativo',fld:'vPROGRAMAINATIVO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A499ProgramaAtivo',fld:'PROGRAMAATIVO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'PROXIMO'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23ProgramaId',fld:'vPROGRAMAID'},{av:'AV30ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV27ProgramaNome',fld:'vPROGRAMANOME'},{av:'AV32TipoPrivilegio',fld:'vTIPOPRIVILEGIO'},{av:'AV20ProgramaInativo',fld:'vPROGRAMAINATIVO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A499ProgramaAtivo',fld:'PROGRAMAATIVO'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV6PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A499ProgramaAtivo',fld:'PROGRAMAATIVO'}],[{av:'AV7bmpAlt',fld:'vBMPALT'},{av:'gx.fn.getCtrlProperty("vBMPALT","Tooltiptext")',ctrl:'vBMPALT',prop:'Tooltiptext'},{av:'AV8bmpExc',fld:'vBMPEXC'},{av:'gx.fn.getCtrlProperty("vBMPEXC","Tooltiptext")',ctrl:'vBMPEXC',prop:'Tooltiptext'},{av:'AV16bmpCon',fld:'vBMPCON'},{av:'gx.fn.getCtrlProperty("vBMPCON","Tooltiptext")',ctrl:'vBMPCON',prop:'Tooltiptext'},{av:'AV17bmpAtivo',fld:'vBMPATIVO'},{av:'gx.fn.getCtrlProperty("vBMPATIVO","Tooltiptext")',ctrl:'vBMPATIVO',prop:'Tooltiptext'}]];
   this.EvtParms["'ALTERAR'"] = [[{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23ProgramaId',fld:'vPROGRAMAID'},{av:'AV27ProgramaNome',fld:'vPROGRAMANOME'},{av:'AV32TipoPrivilegio',fld:'vTIPOPRIVILEGIO'},{av:'AV20ProgramaInativo',fld:'vPROGRAMAINATIVO'},{av:'AV30ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'EXCLUIR'"] = [[{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23ProgramaId',fld:'vPROGRAMAID'},{av:'AV27ProgramaNome',fld:'vPROGRAMANOME'},{av:'AV32TipoPrivilegio',fld:'vTIPOPRIVILEGIO'},{av:'AV20ProgramaInativo',fld:'vPROGRAMAINATIVO'},{av:'AV30ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'CONSULTAR'"] = [[{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV23ProgramaId',fld:'vPROGRAMAID'},{av:'AV27ProgramaNome',fld:'vPROGRAMANOME'},{av:'AV32TipoPrivilegio',fld:'vTIPOPRIVILEGIO'},{av:'AV20ProgramaInativo',fld:'vPROGRAMAINATIVO'},{av:'AV30ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV11OrderedBy',fld:'vORDEREDBY'}],[{av:'A141ProgramaId',fld:'PROGRAMAID'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["VPAGINA.CLICK"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23ProgramaId',fld:'vPROGRAMAID'},{av:'AV30ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV27ProgramaNome',fld:'vPROGRAMANOME'},{av:'AV32TipoPrivilegio',fld:'vTIPOPRIVILEGIO'},{av:'AV20ProgramaInativo',fld:'vPROGRAMAINATIVO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A499ProgramaAtivo',fld:'PROGRAMAATIVO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'NOVO'"] = [[{av:'AV19SistemaId',fld:'vSISTEMAID'}],[{av:'AV19SistemaId',fld:'vSISTEMAID'}]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23ProgramaId',fld:'vPROGRAMAID'},{av:'AV30ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV27ProgramaNome',fld:'vPROGRAMANOME'},{av:'AV32TipoPrivilegio',fld:'vTIPOPRIVILEGIO'},{av:'AV20ProgramaInativo',fld:'vPROGRAMAINATIVO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A499ProgramaAtivo',fld:'PROGRAMAATIVO'},{av:'AV5Pagina',fld:'vPAGINA'}],[{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV5Pagina',fld:'vPAGINA'},{av:'AV28filtros',fld:'vFILTROS'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV23ProgramaId',fld:'vPROGRAMAID'},{av:'AV30ProgramaLink',fld:'vPROGRAMALINK'},{av:'AV27ProgramaNome',fld:'vPROGRAMANOME'},{av:'AV32TipoPrivilegio',fld:'vTIPOPRIVILEGIO'},{av:'AV20ProgramaInativo',fld:'vPROGRAMAINATIVO'},{av:'AV11OrderedBy',fld:'vORDEREDBY'},{av:'AV19SistemaId',fld:'vSISTEMAID'},{av:'AV31SnRecuperaFiltro',fld:'vSNRECUPERAFILTRO'},{av:'A499ProgramaAtivo',fld:'PROGRAMAATIVO'}],[]];
   this.setVCMap("AV19SistemaId", "vSISTEMAID", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A499ProgramaAtivo", "PROGRAMAATIVO", 0, "char");
   this.setVCMap("AV19SistemaId", "vSISTEMAID", 0, "char");
   this.setVCMap("AV31SnRecuperaFiltro", "vSNRECUPERAFILTRO", 0, "char");
   this.setVCMap("A499ProgramaAtivo", "PROGRAMAATIVO", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[18]);
   GridContainer.addRefreshingVar(this.GXValidFnc[23]);
   GridContainer.addRefreshingVar(this.GXValidFnc[28]);
   GridContainer.addRefreshingVar(this.GXValidFnc[36]);
   GridContainer.addRefreshingVar(this.GXValidFnc[40]);
   GridContainer.addRefreshingVar(this.GXValidFnc[89]);
   GridContainer.addRefreshingVar({rfrVar:"AV19SistemaId"});
   GridContainer.addRefreshingVar({rfrVar:"AV31SnRecuperaFiltro"});
   GridContainer.addRefreshingVar({rfrVar:"A499ProgramaAtivo"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hprograma());
