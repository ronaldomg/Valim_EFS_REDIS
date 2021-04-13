/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:41:58.21
*/
gx.evt.autoSkip = false;
gx.define('gx0hk0', false, function () {
   this.ServerClass =  "gx0hk0" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.autoRefresh = true;
   this.SetStandaloneVars=function()
   {
      this.AV13pAgendaId=gx.fn.getIntegerValue("vPAGENDAID",'.') ;
      this.AV14pAgendaData=gx.fn.getDateValue("vPAGENDADATA") ;
   };
   this.e131vj2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141vj1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,63];
   this.GXLastCtrlId =63;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0hk0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(8570,53,"AGENDAID","Código da Agenda","","AgendaId","int",0,"px",4,4,"right",null,[],8570,"AgendaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8571,54,"AGENDADATA","Data","","AgendaData","date",0,"px",10,10,"right",null,[],8571,"AgendaData",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8564,55,"AGENDAHORAINICIAL","Hora Inicial","","AgendaHoraInicial","char",0,"px",5,5,"left",null,[],8564,"AgendaHoraInicial",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8565,56,"AGENDAHORAFINAL","Hora Final","","AgendaHoraFinal","char",0,"px",5,5,"left",null,[],8565,"AgendaHoraFinal",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8566,57,"PROFISSIONALID","Código do Profissional","","ProfissionalId","int",0,"px",4,4,"right",null,[],8566,"ProfissionalId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8567,58,"PROFISSIONALEMPRESAID","Empresa do Profissional","","ProfissionalEmpresaId","char",0,"px",10,10,"left",null,[],8567,"ProfissionalEmpresaId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(8568,59,"AGENDATIPOCOMPROMISSOID","Código do Tipo","","AgendaTipoCompromissoId","int",0,"px",4,4,"right",null,[],8568,"AgendaTipoCompromissoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(227,60,"EMPRESAPESSOASEMPRESAID","Empresa da Pessoa","","EmpresaPessoasEmpresaId","char",0,"px",10,10,"left",null,[],227,"EmpresaPessoasEmpresaId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKAGENDAID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGENDAID",gxz:"ZV6cAgendaId",gxold:"OV6cAgendaId",gxvar:"AV6cAgendaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cAgendaId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cAgendaId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAGENDAID",gx.O.AV6cAgendaId,0)},c2v:function(){gx.O.AV6cAgendaId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAGENDAID",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKAGENDADATA", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGENDADATA",gxz:"ZV7cAgendaData",gxold:"OV7cAgendaData",gxvar:"AV7cAgendaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cAgendaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV7cAgendaData=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCAGENDADATA",gx.O.AV7cAgendaData,0)},c2v:function(){gx.O.AV7cAgendaData=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCAGENDADATA")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKAGENDAHORAINICIAL", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGENDAHORAINICIAL",gxz:"ZV8cAgendaHoraInicial",gxold:"OV8cAgendaHoraInicial",gxvar:"AV8cAgendaHoraInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cAgendaHoraInicial=Value},v2z:function(Value){gx.O.ZV8cAgendaHoraInicial=Value},v2c:function(){gx.fn.setControlValue("vCAGENDAHORAINICIAL",gx.O.AV8cAgendaHoraInicial,0)},c2v:function(){gx.O.AV8cAgendaHoraInicial=this.val()},val:function(){return gx.fn.getControlValue("vCAGENDAHORAINICIAL")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKAGENDAHORAFINAL", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:5,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGENDAHORAFINAL",gxz:"ZV9cAgendaHoraFinal",gxold:"OV9cAgendaHoraFinal",gxvar:"AV9cAgendaHoraFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cAgendaHoraFinal=Value},v2z:function(Value){gx.O.ZV9cAgendaHoraFinal=Value},v2c:function(){gx.fn.setControlValue("vCAGENDAHORAFINAL",gx.O.AV9cAgendaHoraFinal,0)},c2v:function(){gx.O.AV9cAgendaHoraFinal=this.val()},val:function(){return gx.fn.getControlValue("vCAGENDAHORAFINAL")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKPROFISSIONALID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROFISSIONALID",gxz:"ZV10cProfissionalId",gxold:"OV10cProfissionalId",gxvar:"AV10cProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cProfissionalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCPROFISSIONALID",gx.O.AV10cProfissionalId,0)},c2v:function(){gx.O.AV10cProfissionalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCPROFISSIONALID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKPROFISSIONALEMPRESAID", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCPROFISSIONALEMPRESAID",gxz:"ZV11cProfissionalEmpresaId",gxold:"OV11cProfissionalEmpresaId",gxvar:"AV11cProfissionalEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cProfissionalEmpresaId=Value},v2z:function(Value){gx.O.ZV11cProfissionalEmpresaId=Value},v2c:function(){gx.fn.setControlValue("vCPROFISSIONALEMPRESAID",gx.O.AV11cProfissionalEmpresaId,0)},c2v:function(){gx.O.AV11cProfissionalEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCPROFISSIONALEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKAGENDATIPOCOMPROMISSOID", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCAGENDATIPOCOMPROMISSOID",gxz:"ZV12cAgendaTipoCompromissoId",gxold:"OV12cAgendaTipoCompromissoId",gxvar:"AV12cAgendaTipoCompromissoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cAgendaTipoCompromissoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV12cAgendaTipoCompromissoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCAGENDATIPOCOMPROMISSOID",gx.O.AV12cAgendaTipoCompromissoId,0)},c2v:function(){gx.O.AV12cAgendaTipoCompromissoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCAGENDATIPOCOMPROMISSOID",'.')},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AGENDAID",gxz:"Z8570AgendaId",gxold:"O8570AgendaId",gxvar:"A8570AgendaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8570AgendaId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8570AgendaId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("AGENDAID",row || gx.fn.currentGridRowImpl(51),gx.O.A8570AgendaId,0)},c2v:function(){gx.O.A8570AgendaId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("AGENDAID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AGENDADATA",gxz:"Z8571AgendaData",gxold:"O8571AgendaData",gxvar:"A8571AgendaData",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8571AgendaData=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z8571AgendaData=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("AGENDADATA",row || gx.fn.currentGridRowImpl(51),gx.O.A8571AgendaData,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8571AgendaData=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("AGENDADATA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:5,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AGENDAHORAINICIAL",gxz:"Z8564AgendaHoraInicial",gxold:"O8564AgendaHoraInicial",gxvar:"A8564AgendaHoraInicial",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8564AgendaHoraInicial=Value},v2z:function(Value){gx.O.Z8564AgendaHoraInicial=Value},v2c:function(row){gx.fn.setGridControlValue("AGENDAHORAINICIAL",row || gx.fn.currentGridRowImpl(51),gx.O.A8564AgendaHoraInicial,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8564AgendaHoraInicial=this.val()},val:function(row){return gx.fn.getGridControlValue("AGENDAHORAINICIAL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:5,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AGENDAHORAFINAL",gxz:"Z8565AgendaHoraFinal",gxold:"O8565AgendaHoraFinal",gxvar:"A8565AgendaHoraFinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8565AgendaHoraFinal=Value},v2z:function(Value){gx.O.Z8565AgendaHoraFinal=Value},v2c:function(row){gx.fn.setGridControlValue("AGENDAHORAFINAL",row || gx.fn.currentGridRowImpl(51),gx.O.A8565AgendaHoraFinal,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8565AgendaHoraFinal=this.val()},val:function(row){return gx.fn.getGridControlValue("AGENDAHORAFINAL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROFISSIONALID",gxz:"Z8566ProfissionalId",gxold:"O8566ProfissionalId",gxvar:"A8566ProfissionalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8566ProfissionalId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8566ProfissionalId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("PROFISSIONALID",row || gx.fn.currentGridRowImpl(51),gx.O.A8566ProfissionalId,0)},c2v:function(){gx.O.A8566ProfissionalId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("PROFISSIONALID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"PROFISSIONALEMPRESAID",gxz:"Z8567ProfissionalEmpresaId",gxold:"O8567ProfissionalEmpresaId",gxvar:"A8567ProfissionalEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A8567ProfissionalEmpresaId=Value},v2z:function(Value){gx.O.Z8567ProfissionalEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("PROFISSIONALEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A8567ProfissionalEmpresaId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A8567ProfissionalEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("PROFISSIONALEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"AGENDATIPOCOMPROMISSOID",gxz:"Z8568AgendaTipoCompromissoId",gxold:"O8568AgendaTipoCompromissoId",gxvar:"A8568AgendaTipoCompromissoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A8568AgendaTipoCompromissoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z8568AgendaTipoCompromissoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("AGENDATIPOCOMPROMISSOID",row || gx.fn.currentGridRowImpl(51),gx.O.A8568AgendaTipoCompromissoId,0)},c2v:function(){gx.O.A8568AgendaTipoCompromissoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("AGENDATIPOCOMPROMISSOID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"EMPRESAPESSOASEMPRESAID",gxz:"Z227EmpresaPessoasEmpresaId",gxold:"O227EmpresaPessoasEmpresaId",gxvar:"A227EmpresaPessoasEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A227EmpresaPessoasEmpresaId=Value},v2z:function(Value){gx.O.Z227EmpresaPessoasEmpresaId=Value},v2c:function(row){gx.fn.setGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(51),gx.O.A227EmpresaPessoasEmpresaId,0)},c2v:function(){gx.O.A227EmpresaPessoasEmpresaId=this.val()},val:function(row){return gx.fn.getGridControlValue("EMPRESAPESSOASEMPRESAID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[63]={fld:"TABLE4",grid:0};
   this.AV6cAgendaId = 0 ;
   this.ZV6cAgendaId = 0 ;
   this.OV6cAgendaId = 0 ;
   this.AV7cAgendaData = gx.date.nullDate() ;
   this.ZV7cAgendaData = gx.date.nullDate() ;
   this.OV7cAgendaData = gx.date.nullDate() ;
   this.AV8cAgendaHoraInicial = "" ;
   this.ZV8cAgendaHoraInicial = "" ;
   this.OV8cAgendaHoraInicial = "" ;
   this.AV9cAgendaHoraFinal = "" ;
   this.ZV9cAgendaHoraFinal = "" ;
   this.OV9cAgendaHoraFinal = "" ;
   this.AV10cProfissionalId = 0 ;
   this.ZV10cProfissionalId = 0 ;
   this.OV10cProfissionalId = 0 ;
   this.AV11cProfissionalEmpresaId = "" ;
   this.ZV11cProfissionalEmpresaId = "" ;
   this.OV11cProfissionalEmpresaId = "" ;
   this.AV12cAgendaTipoCompromissoId = 0 ;
   this.ZV12cAgendaTipoCompromissoId = 0 ;
   this.OV12cAgendaTipoCompromissoId = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z8570AgendaId = 0 ;
   this.O8570AgendaId = 0 ;
   this.Z8571AgendaData = gx.date.nullDate() ;
   this.O8571AgendaData = gx.date.nullDate() ;
   this.Z8564AgendaHoraInicial = "" ;
   this.O8564AgendaHoraInicial = "" ;
   this.Z8565AgendaHoraFinal = "" ;
   this.O8565AgendaHoraFinal = "" ;
   this.Z8566ProfissionalId = 0 ;
   this.O8566ProfissionalId = 0 ;
   this.Z8567ProfissionalEmpresaId = "" ;
   this.O8567ProfissionalEmpresaId = "" ;
   this.Z8568AgendaTipoCompromissoId = 0 ;
   this.O8568AgendaTipoCompromissoId = 0 ;
   this.Z227EmpresaPessoasEmpresaId = "" ;
   this.O227EmpresaPessoasEmpresaId = "" ;
   this.AV6cAgendaId = 0 ;
   this.AV7cAgendaData = gx.date.nullDate() ;
   this.AV8cAgendaHoraInicial = "" ;
   this.AV9cAgendaHoraFinal = "" ;
   this.AV10cProfissionalId = 0 ;
   this.AV11cProfissionalEmpresaId = "" ;
   this.AV12cAgendaTipoCompromissoId = 0 ;
   this.AV13pAgendaId = 0 ;
   this.AV14pAgendaData = gx.date.nullDate() ;
   this.AV5LinkSelection = "" ;
   this.A8570AgendaId = 0 ;
   this.A8571AgendaData = gx.date.nullDate() ;
   this.A8564AgendaHoraInicial = "" ;
   this.A8565AgendaHoraFinal = "" ;
   this.A8566ProfissionalId = 0 ;
   this.A8567ProfissionalEmpresaId = "" ;
   this.A8568AgendaTipoCompromissoId = 0 ;
   this.A227EmpresaPessoasEmpresaId = "" ;
   this.Events = {"e131vj2_client": ["ENTER", true] ,"e141vj1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAgendaId',fld:'vCAGENDAID'},{av:'AV7cAgendaData',fld:'vCAGENDADATA'},{av:'AV8cAgendaHoraInicial',fld:'vCAGENDAHORAINICIAL'},{av:'AV9cAgendaHoraFinal',fld:'vCAGENDAHORAFINAL'},{av:'AV10cProfissionalId',fld:'vCPROFISSIONALID'},{av:'AV11cProfissionalEmpresaId',fld:'vCPROFISSIONALEMPRESAID'},{av:'AV12cAgendaTipoCompromissoId',fld:'vCAGENDATIPOCOMPROMISSOID'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A8570AgendaId',fld:'AGENDAID'},{av:'A8571AgendaData',fld:'AGENDADATA'}],[{av:'AV13pAgendaId',fld:'vPAGENDAID'},{av:'AV14pAgendaData',fld:'vPAGENDADATA'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAgendaId',fld:'vCAGENDAID'},{av:'AV7cAgendaData',fld:'vCAGENDADATA'},{av:'AV8cAgendaHoraInicial',fld:'vCAGENDAHORAINICIAL'},{av:'AV9cAgendaHoraFinal',fld:'vCAGENDAHORAFINAL'},{av:'AV10cProfissionalId',fld:'vCPROFISSIONALID'},{av:'AV11cProfissionalEmpresaId',fld:'vCPROFISSIONALEMPRESAID'},{av:'AV12cAgendaTipoCompromissoId',fld:'vCAGENDATIPOCOMPROMISSOID'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAgendaId',fld:'vCAGENDAID'},{av:'AV7cAgendaData',fld:'vCAGENDADATA'},{av:'AV8cAgendaHoraInicial',fld:'vCAGENDAHORAINICIAL'},{av:'AV9cAgendaHoraFinal',fld:'vCAGENDAHORAFINAL'},{av:'AV10cProfissionalId',fld:'vCPROFISSIONALID'},{av:'AV11cProfissionalEmpresaId',fld:'vCPROFISSIONALEMPRESAID'},{av:'AV12cAgendaTipoCompromissoId',fld:'vCAGENDATIPOCOMPROMISSOID'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAgendaId',fld:'vCAGENDAID'},{av:'AV7cAgendaData',fld:'vCAGENDADATA'},{av:'AV8cAgendaHoraInicial',fld:'vCAGENDAHORAINICIAL'},{av:'AV9cAgendaHoraFinal',fld:'vCAGENDAHORAFINAL'},{av:'AV10cProfissionalId',fld:'vCPROFISSIONALID'},{av:'AV11cProfissionalEmpresaId',fld:'vCPROFISSIONALEMPRESAID'},{av:'AV12cAgendaTipoCompromissoId',fld:'vCAGENDATIPOCOMPROMISSOID'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cAgendaId',fld:'vCAGENDAID'},{av:'AV7cAgendaData',fld:'vCAGENDADATA'},{av:'AV8cAgendaHoraInicial',fld:'vCAGENDAHORAINICIAL'},{av:'AV9cAgendaHoraFinal',fld:'vCAGENDAHORAFINAL'},{av:'AV10cProfissionalId',fld:'vCPROFISSIONALID'},{av:'AV11cProfissionalEmpresaId',fld:'vCPROFISSIONALEMPRESAID'},{av:'AV12cAgendaTipoCompromissoId',fld:'vCAGENDATIPOCOMPROMISSOID'}],[]];
   this.setVCMap("AV13pAgendaId", "vPAGENDAID", 0, "int");
   this.setVCMap("AV14pAgendaData", "vPAGENDADATA", 0, "date");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0hk0());
