/**@preserve  GeneXus Java 10_3_12-110051 on May 5, 2020 18:23:21.93
*/
gx.evt.autoSkip=!1;gx.define("gx00x1",!1,function(){var n,t;this.ServerClass="gx00x1";this.PackageName="";this.setObjectType("web");this.hasEnterEvent=!0;this.skipOnEnter=!1;this.autoRefresh=!0;this.SetStandaloneVars=function(){this.AV11pUsuarioId=gx.fn.getIntegerValue("vPUSUARIOID",".");this.AV12pUsuarioCodigo=gx.fn.getControlValue("vPUSUARIOCODIGO");this.AV13pAcessoEmpresaId=gx.fn.getControlValue("vPACESSOEMPRESAID")};this.e164b1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")=="AdvancedContainer"?(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer AdvancedContainerVisible"),gx.fn.setCtrlProperty("BTNTOGGLE","Class",gx.fn.getCtrlProperty("BTNTOGGLE","Class")+" BtnToggleActive")):(gx.fn.setCtrlProperty("ADVANCEDCONTAINER","Class","AdvancedContainer"),gx.fn.setCtrlProperty("BTNTOGGLE","Class","BtnToggle"));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}])};this.e114b1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("USUARIOCODIGOFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("USUARIOCODIGOFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCUSUARIOCODIGO","Visible",!0)):(gx.fn.setCtrlProperty("USUARIOCODIGOFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCUSUARIOCODIGO","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("USUARIOCODIGOFILTERCONTAINER","Class")',ctrl:"USUARIOCODIGOFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUSUARIOCODIGO","Visible")',ctrl:"vCUSUARIOCODIGO",prop:"Visible"}])};this.e124b1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("ACESSOEMPRESAIDFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("ACESSOEMPRESAIDFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCACESSOEMPRESAID","Visible",!0)):(gx.fn.setCtrlProperty("ACESSOEMPRESAIDFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCACESSOEMPRESAID","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ACESSOEMPRESAIDFILTERCONTAINER","Class")',ctrl:"ACESSOEMPRESAIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCACESSOEMPRESAID","Visible")',ctrl:"vCACESSOEMPRESAID",prop:"Visible"}])};this.e134b1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("ACESSOPRIVILEGIOFILTERCONTAINER","Class")=="AdvancedContainerItem"?(gx.fn.setCtrlProperty("ACESSOPRIVILEGIOFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"),gx.fn.setCtrlProperty("vCACESSOPRIVILEGIO","Visible",!0)):(gx.fn.setCtrlProperty("ACESSOPRIVILEGIOFILTERCONTAINER","Class","AdvancedContainerItem"),gx.fn.setCtrlProperty("vCACESSOPRIVILEGIO","Visible",!1));this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ACESSOPRIVILEGIOFILTERCONTAINER","Class")',ctrl:"ACESSOPRIVILEGIOFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCACESSOPRIVILEGIO","Visible")',ctrl:"vCACESSOPRIVILEGIO",prop:"Visible"}])};this.e144b1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("ACESSOEMPRESAVALIDADEFILTERCONTAINER","Class")=="AdvancedContainerItem"?gx.fn.setCtrlProperty("ACESSOEMPRESAVALIDADEFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"):gx.fn.setCtrlProperty("ACESSOEMPRESAVALIDADEFILTERCONTAINER","Class","AdvancedContainerItem");this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ACESSOEMPRESAVALIDADEFILTERCONTAINER","Class")',ctrl:"ACESSOEMPRESAVALIDADEFILTERCONTAINER",prop:"Class"}])};this.e154b1_client=function(){this.clearMessages();gx.fn.getCtrlProperty("ACESSOEMPRESAULTATUALIZACAOFILTERCONTAINER","Class")=="AdvancedContainerItem"?gx.fn.setCtrlProperty("ACESSOEMPRESAULTATUALIZACAOFILTERCONTAINER","Class","AdvancedContainerItem AdvancedContainerItemExpanded"):gx.fn.setCtrlProperty("ACESSOEMPRESAULTATUALIZACAOFILTERCONTAINER","Class","AdvancedContainerItem");this.refreshOutputs([{av:'gx.fn.getCtrlProperty("ACESSOEMPRESAULTATUALIZACAOFILTERCONTAINER","Class")',ctrl:"ACESSOEMPRESAULTATUALIZACAOFILTERCONTAINER",prop:"Class"}])};this.e194b2_client=function(){this.executeServerEvent("ENTER",!0,arguments[0],!1,!1)};this.e204b1_client=function(){this.executeServerEvent("CANCEL",!0,null,!1,!1)};this.GXValidFnc=[];n=this.GXValidFnc;this.GXCtrlIds=[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,62,63,65,66,67,68,69,70,71,72,73];this.GXLastCtrlId=73;this.Grid1Container=new gx.grid.grid(this,2,"WbpLvl2",64,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx00x1",[],!1,1,!1,!0,10,!0,!1,!1,"",0,"px","Novo registro",!0,!1,!1,null,null,!1,"",!1,[1,1,1,1]);t=this.Grid1Container;t.addBitmap("&Linkselection","vLINKSELECTION",65,0,"px",17,"px",null,"","","SelectionAttribute","WWActionColumn");t.addSingleLineEdit(17,66,"USUARIOCODIGO","Código do Usuário","","UsuarioCodigo","char",0,"px",12,12,"left",null,[],17,"UsuarioCodigo",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(18,67,"ACESSOEMPRESAID","Código da Empresa","","AcessoEmpresaId","char",0,"px",36,36,"left",null,[],18,"AcessoEmpresaId",!0,0,!1,!1,"Attribute",1,"WWColumn");t.addSingleLineEdit(120,68,"ACESSOPRIVILEGIO","Privilégio","","AcessoPrivilegio","char",0,"px",1,1,"left",null,[],120,"AcessoPrivilegio",!0,0,!1,!1,"DescriptionAttribute",1,"WWColumn");t.addSingleLineEdit(100,69,"ACESSOEMPRESAVALIDADE","Validade","","AcessoEmpresaValidade","dtime",0,"px",16,16,"right",null,[],100,"AcessoEmpresaValidade",!0,5,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(101,70,"ACESSOEMPRESAULTATUALIZACAO","Atualização","","AcessoEmpresaUltAtualizacao","dtime",0,"px",16,16,"right",null,[],101,"AcessoEmpresaUltAtualizacao",!0,5,!1,!1,"Attribute",1,"WWColumn OptionalColumn");t.addSingleLineEdit(12,71,"USUARIOID","Usuario","","UsuarioId","int",0,"px",14,14,"right",null,[],12,"UsuarioId",!1,0,!1,!1,"Attribute",1,"");this.setGrid(t);n[2]={fld:"",grid:0};n[3]={fld:"MAIN",grid:0};n[4]={fld:"",grid:0};n[5]={fld:"",grid:0};n[6]={fld:"ADVANCEDCONTAINER",grid:0};n[7]={fld:"",grid:0};n[8]={fld:"",grid:0};n[9]={fld:"USUARIOCODIGOFILTERCONTAINER",grid:0};n[10]={fld:"",grid:0};n[11]={fld:"",grid:0};n[12]={fld:"LBLUSUARIOCODIGOFILTER",format:1,grid:0};n[13]={fld:"",grid:0};n[14]={fld:"",grid:0};n[15]={fld:"",grid:0};n[16]={lvl:0,type:"char",len:12,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCUSUARIOCODIGO",gxz:"ZV6cUsuarioCodigo",gxold:"OV6cUsuarioCodigo",gxvar:"AV6cUsuarioCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV6cUsuarioCodigo=n},v2z:function(n){gx.O.ZV6cUsuarioCodigo=n},v2c:function(){gx.fn.setControlValue("vCUSUARIOCODIGO",gx.O.AV6cUsuarioCodigo,0)},c2v:function(){gx.O.AV6cUsuarioCodigo=this.val()},val:function(){return gx.fn.getControlValue("vCUSUARIOCODIGO")},nac:gx.falseFn};n[17]={fld:"",grid:0};n[18]={fld:"",grid:0};n[19]={fld:"ACESSOEMPRESAIDFILTERCONTAINER",grid:0};n[20]={fld:"",grid:0};n[21]={fld:"",grid:0};n[22]={fld:"LBLACESSOEMPRESAIDFILTER",format:1,grid:0};n[23]={fld:"",grid:0};n[24]={fld:"",grid:0};n[25]={fld:"",grid:0};n[26]={lvl:0,type:"char",len:36,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACESSOEMPRESAID",gxz:"ZV7cAcessoEmpresaId",gxold:"OV7cAcessoEmpresaId",gxvar:"AV7cAcessoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV7cAcessoEmpresaId=n},v2z:function(n){gx.O.ZV7cAcessoEmpresaId=n},v2c:function(){gx.fn.setControlValue("vCACESSOEMPRESAID",gx.O.AV7cAcessoEmpresaId,0)},c2v:function(){gx.O.AV7cAcessoEmpresaId=this.val()},val:function(){return gx.fn.getControlValue("vCACESSOEMPRESAID")},nac:gx.falseFn};n[27]={fld:"",grid:0};n[28]={fld:"",grid:0};n[29]={fld:"ACESSOPRIVILEGIOFILTERCONTAINER",grid:0};n[30]={fld:"",grid:0};n[31]={fld:"",grid:0};n[32]={fld:"LBLACESSOPRIVILEGIOFILTER",format:1,grid:0};n[33]={fld:"",grid:0};n[34]={fld:"",grid:0};n[35]={fld:"",grid:0};n[36]={lvl:0,type:"char",len:1,dec:0,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACESSOPRIVILEGIO",gxz:"ZV8cAcessoPrivilegio",gxold:"OV8cAcessoPrivilegio",gxvar:"AV8cAcessoPrivilegio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV8cAcessoPrivilegio=n},v2z:function(n){gx.O.ZV8cAcessoPrivilegio=n},v2c:function(){gx.fn.setControlValue("vCACESSOPRIVILEGIO",gx.O.AV8cAcessoPrivilegio,0)},c2v:function(){gx.O.AV8cAcessoPrivilegio=this.val()},val:function(){return gx.fn.getControlValue("vCACESSOPRIVILEGIO")},nac:gx.falseFn};n[37]={fld:"",grid:0};n[38]={fld:"",grid:0};n[39]={fld:"ACESSOEMPRESAVALIDADEFILTERCONTAINER",grid:0};n[40]={fld:"",grid:0};n[41]={fld:"",grid:0};n[42]={fld:"LBLACESSOEMPRESAVALIDADEFILTER",format:1,grid:0};n[43]={fld:"",grid:0};n[44]={fld:"",grid:0};n[45]={fld:"",grid:0};n[46]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACESSOEMPRESAVALIDADE",gxz:"ZV9cAcessoEmpresaValidade",gxold:"OV9cAcessoEmpresaValidade",gxvar:"AV9cAcessoEmpresaValidade",dp:{f:-1,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV9cAcessoEmpresaValidade=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV9cAcessoEmpresaValidade=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vCACESSOEMPRESAVALIDADE",gx.O.AV9cAcessoEmpresaValidade,0)},c2v:function(){gx.O.AV9cAcessoEmpresaValidade=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCACESSOEMPRESAVALIDADE")},nac:gx.falseFn};n[47]={fld:"",grid:0};n[48]={fld:"",grid:0};n[49]={fld:"ACESSOEMPRESAULTATUALIZACAOFILTERCONTAINER",grid:0};n[50]={fld:"",grid:0};n[51]={fld:"",grid:0};n[52]={fld:"LBLACESSOEMPRESAULTATUALIZACAOFILTER",format:1,grid:0};n[53]={fld:"",grid:0};n[54]={fld:"",grid:0};n[55]={fld:"",grid:0};n[56]={lvl:0,type:"dtime",len:10,dec:5,sign:!1,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCACESSOEMPRESAULTATUALIZACAO",gxz:"ZV10cAcessoEmpresaUltAtualizacao",gxold:"OV10cAcessoEmpresaUltAtualizacao",gxvar:"AV10cAcessoEmpresaUltAtualizacao",dp:{f:-1,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(n){gx.O.AV10cAcessoEmpresaUltAtualizacao=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.ZV10cAcessoEmpresaUltAtualizacao=gx.fn.toDatetimeValue(n)},v2c:function(){gx.fn.setControlValue("vCACESSOEMPRESAULTATUALIZACAO",gx.O.AV10cAcessoEmpresaUltAtualizacao,0)},c2v:function(){gx.O.AV10cAcessoEmpresaUltAtualizacao=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getDateTimeValue("vCACESSOEMPRESAULTATUALIZACAO")},nac:gx.falseFn};n[57]={fld:"",grid:0};n[58]={fld:"GRIDTABLE",grid:0};n[59]={fld:"",grid:0};n[60]={fld:"",grid:0};n[62]={fld:"",grid:0};n[63]={fld:"",grid:0};n[65]={lvl:2,type:"bits",len:1024,dec:0,sign:!1,ro:1,isacc:0,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.AV5LinkSelection=n},v2z:function(n){gx.O.ZV5LinkSelection=n},v2c:function(n){gx.fn.setGridMultimediaValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(64),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(n){return gx.fn.getGridControlValue("vLINKSELECTION",n||gx.fn.currentGridRowImpl(64))},val_GXI:function(n){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",n||gx.fn.currentGridRowImpl(64))},gxvar_GXI:"AV17Linkselection_GXI",nac:gx.falseFn};n[66]={lvl:2,type:"char",len:12,dec:0,sign:!1,ro:1,isacc:0,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOCODIGO",gxz:"Z17UsuarioCodigo",gxold:"O17UsuarioCodigo",gxvar:"A17UsuarioCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A17UsuarioCodigo=n},v2z:function(n){gx.O.Z17UsuarioCodigo=n},v2c:function(n){gx.fn.setGridControlValue("USUARIOCODIGO",n||gx.fn.currentGridRowImpl(64),gx.O.A17UsuarioCodigo,0)},c2v:function(){gx.O.A17UsuarioCodigo=this.val()},val:function(n){return gx.fn.getGridControlValue("USUARIOCODIGO",n||gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};n[67]={lvl:2,type:"char",len:36,dec:0,sign:!1,ro:1,isacc:0,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOEMPRESAID",gxz:"Z18AcessoEmpresaId",gxold:"O18AcessoEmpresaId",gxvar:"A18AcessoEmpresaId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A18AcessoEmpresaId=n},v2z:function(n){gx.O.Z18AcessoEmpresaId=n},v2c:function(n){gx.fn.setGridControlValue("ACESSOEMPRESAID",n||gx.fn.currentGridRowImpl(64),gx.O.A18AcessoEmpresaId,0)},c2v:function(){gx.O.A18AcessoEmpresaId=this.val()},val:function(n){return gx.fn.getGridControlValue("ACESSOEMPRESAID",n||gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};n[68]={lvl:2,type:"char",len:1,dec:0,sign:!1,ro:1,isacc:0,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOPRIVILEGIO",gxz:"Z120AcessoPrivilegio",gxold:"O120AcessoPrivilegio",gxvar:"A120AcessoPrivilegio",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",autoCorrect:"1",v2v:function(n){gx.O.A120AcessoPrivilegio=n},v2z:function(n){gx.O.Z120AcessoPrivilegio=n},v2c:function(n){gx.fn.setGridControlValue("ACESSOPRIVILEGIO",n||gx.fn.currentGridRowImpl(64),gx.O.A120AcessoPrivilegio,0)},c2v:function(){gx.O.A120AcessoPrivilegio=this.val()},val:function(n){return gx.fn.getGridControlValue("ACESSOPRIVILEGIO",n||gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};n[69]={lvl:2,type:"dtime",len:10,dec:5,sign:!1,ro:1,isacc:0,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOEMPRESAVALIDADE",gxz:"Z100AcessoEmpresaValidade",gxold:"O100AcessoEmpresaValidade",gxvar:"A100AcessoEmpresaValidade",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A100AcessoEmpresaValidade=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z100AcessoEmpresaValidade=gx.fn.toDatetimeValue(n)},v2c:function(n){gx.fn.setGridControlValue("ACESSOEMPRESAVALIDADE",n||gx.fn.currentGridRowImpl(64),gx.O.A100AcessoEmpresaValidade,0)},c2v:function(){gx.O.A100AcessoEmpresaValidade=gx.fn.toDatetimeValue(this.val())},val:function(n){return gx.fn.getGridDateTimeValue("ACESSOEMPRESAVALIDADE",n||gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};n[70]={lvl:2,type:"dtime",len:10,dec:5,sign:!1,ro:1,isacc:0,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"ACESSOEMPRESAULTATUALIZACAO",gxz:"Z101AcessoEmpresaUltAtualizacao",gxold:"O101AcessoEmpresaUltAtualizacao",gxvar:"A101AcessoEmpresaUltAtualizacao",dp:{f:0,st:!0,wn:!1,mf:!1,pic:"99/99/9999 99:99",dec:5},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A101AcessoEmpresaUltAtualizacao=gx.fn.toDatetimeValue(n)},v2z:function(n){gx.O.Z101AcessoEmpresaUltAtualizacao=gx.fn.toDatetimeValue(n)},v2c:function(n){gx.fn.setGridControlValue("ACESSOEMPRESAULTATUALIZACAO",n||gx.fn.currentGridRowImpl(64),gx.O.A101AcessoEmpresaUltAtualizacao,0)},c2v:function(){gx.O.A101AcessoEmpresaUltAtualizacao=gx.fn.toDatetimeValue(this.val())},val:function(n){return gx.fn.getGridDateTimeValue("ACESSOEMPRESAULTATUALIZACAO",n||gx.fn.currentGridRowImpl(64))},nac:gx.falseFn};n[71]={lvl:2,type:"int",len:14,dec:0,sign:!1,pic:"ZZZZZZZZZZZZZ9",ro:1,isacc:0,grid:64,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"USUARIOID",gxz:"Z12UsuarioId",gxold:"O12UsuarioId",gxvar:"A12UsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:"text",v2v:function(n){gx.O.A12UsuarioId=gx.num.intval(n)},v2z:function(n){gx.O.Z12UsuarioId=gx.num.intval(n)},v2c:function(n){gx.fn.setGridControlValue("USUARIOID",n||gx.fn.currentGridRowImpl(64),gx.O.A12UsuarioId,0)},c2v:function(){gx.O.A12UsuarioId=gx.num.intval(this.val())},val:function(n){return gx.fn.getGridIntegerValue("USUARIOID",n||gx.fn.currentGridRowImpl(64),".")},nac:gx.falseFn};n[72]={fld:"",grid:0};n[73]={fld:"",grid:0};this.AV6cUsuarioCodigo="";this.ZV6cUsuarioCodigo="";this.OV6cUsuarioCodigo="";this.AV7cAcessoEmpresaId="";this.ZV7cAcessoEmpresaId="";this.OV7cAcessoEmpresaId="";this.AV8cAcessoPrivilegio="";this.ZV8cAcessoPrivilegio="";this.OV8cAcessoPrivilegio="";this.AV9cAcessoEmpresaValidade=gx.date.nullDate();this.ZV9cAcessoEmpresaValidade=gx.date.nullDate();this.OV9cAcessoEmpresaValidade=gx.date.nullDate();this.AV10cAcessoEmpresaUltAtualizacao=gx.date.nullDate();this.ZV10cAcessoEmpresaUltAtualizacao=gx.date.nullDate();this.OV10cAcessoEmpresaUltAtualizacao=gx.date.nullDate();this.ZV5LinkSelection="";this.OV5LinkSelection="";this.Z17UsuarioCodigo="";this.O17UsuarioCodigo="";this.Z18AcessoEmpresaId="";this.O18AcessoEmpresaId="";this.Z120AcessoPrivilegio="";this.O120AcessoPrivilegio="";this.Z100AcessoEmpresaValidade=gx.date.nullDate();this.O100AcessoEmpresaValidade=gx.date.nullDate();this.Z101AcessoEmpresaUltAtualizacao=gx.date.nullDate();this.O101AcessoEmpresaUltAtualizacao=gx.date.nullDate();this.Z12UsuarioId=0;this.O12UsuarioId=0;this.AV6cUsuarioCodigo="";this.AV7cAcessoEmpresaId="";this.AV8cAcessoPrivilegio="";this.AV9cAcessoEmpresaValidade=gx.date.nullDate();this.AV10cAcessoEmpresaUltAtualizacao=gx.date.nullDate();this.AV11pUsuarioId=0;this.AV12pUsuarioCodigo="";this.AV13pAcessoEmpresaId="";this.AV5LinkSelection="";this.A17UsuarioCodigo="";this.A18AcessoEmpresaId="";this.A120AcessoPrivilegio="";this.A100AcessoEmpresaValidade=gx.date.nullDate();this.A101AcessoEmpresaUltAtualizacao=gx.date.nullDate();this.A12UsuarioId=0;this.Events={e194b2_client:["ENTER",!0],e204b1_client:["CANCEL",!0],e164b1_client:["'TOGGLE'",!1],e114b1_client:["LBLUSUARIOCODIGOFILTER.CLICK",!1],e124b1_client:["LBLACESSOEMPRESAIDFILTER.CLICK",!1],e134b1_client:["LBLACESSOPRIVILEGIOFILTER.CLICK",!1],e144b1_client:["LBLACESSOEMPRESAVALIDADEFILTER.CLICK",!1],e154b1_client:["LBLACESSOEMPRESAULTATUALIZACAOFILTER.CLICK",!1]};this.EvtParms.REFRESH=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cUsuarioCodigo",fld:"vCUSUARIOCODIGO"},{av:"AV7cAcessoEmpresaId",fld:"vCACESSOEMPRESAID"},{av:"AV8cAcessoPrivilegio",fld:"vCACESSOPRIVILEGIO"},{av:"AV9cAcessoEmpresaValidade",fld:"vCACESSOEMPRESAVALIDADE"},{av:"AV10cAcessoEmpresaUltAtualizacao",fld:"vCACESSOEMPRESAULTATUALIZACAO"},{av:"AV11pUsuarioId",fld:"vPUSUARIOID",hsh:!0}],[]];this.EvtParms["'TOGGLE'"]=[[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ADVANCEDCONTAINER","Class")',ctrl:"ADVANCEDCONTAINER",prop:"Class"},{ctrl:"BTNTOGGLE",prop:"Class"}]];this.EvtParms["LBLUSUARIOCODIGOFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("USUARIOCODIGOFILTERCONTAINER","Class")',ctrl:"USUARIOCODIGOFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("USUARIOCODIGOFILTERCONTAINER","Class")',ctrl:"USUARIOCODIGOFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCUSUARIOCODIGO","Visible")',ctrl:"vCUSUARIOCODIGO",prop:"Visible"}]];this.EvtParms["LBLACESSOEMPRESAIDFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("ACESSOEMPRESAIDFILTERCONTAINER","Class")',ctrl:"ACESSOEMPRESAIDFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ACESSOEMPRESAIDFILTERCONTAINER","Class")',ctrl:"ACESSOEMPRESAIDFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCACESSOEMPRESAID","Visible")',ctrl:"vCACESSOEMPRESAID",prop:"Visible"}]];this.EvtParms["LBLACESSOPRIVILEGIOFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("ACESSOPRIVILEGIOFILTERCONTAINER","Class")',ctrl:"ACESSOPRIVILEGIOFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ACESSOPRIVILEGIOFILTERCONTAINER","Class")',ctrl:"ACESSOPRIVILEGIOFILTERCONTAINER",prop:"Class"},{av:'gx.fn.getCtrlProperty("vCACESSOPRIVILEGIO","Visible")',ctrl:"vCACESSOPRIVILEGIO",prop:"Visible"}]];this.EvtParms["LBLACESSOEMPRESAVALIDADEFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("ACESSOEMPRESAVALIDADEFILTERCONTAINER","Class")',ctrl:"ACESSOEMPRESAVALIDADEFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ACESSOEMPRESAVALIDADEFILTERCONTAINER","Class")',ctrl:"ACESSOEMPRESAVALIDADEFILTERCONTAINER",prop:"Class"}]];this.EvtParms["LBLACESSOEMPRESAULTATUALIZACAOFILTER.CLICK"]=[[{av:'gx.fn.getCtrlProperty("ACESSOEMPRESAULTATUALIZACAOFILTERCONTAINER","Class")',ctrl:"ACESSOEMPRESAULTATUALIZACAOFILTERCONTAINER",prop:"Class"}],[{av:'gx.fn.getCtrlProperty("ACESSOEMPRESAULTATUALIZACAOFILTERCONTAINER","Class")',ctrl:"ACESSOEMPRESAULTATUALIZACAOFILTERCONTAINER",prop:"Class"}]];this.EvtParms.LOAD=[[],[{av:"AV5LinkSelection",fld:"vLINKSELECTION"}]];this.EvtParms.ENTER=[[{av:"A17UsuarioCodigo",fld:"USUARIOCODIGO"},{av:"A18AcessoEmpresaId",fld:"ACESSOEMPRESAID"}],[{av:"AV12pUsuarioCodigo",fld:"vPUSUARIOCODIGO"},{av:"AV13pAcessoEmpresaId",fld:"vPACESSOEMPRESAID"}]];this.EvtParms.GRID1_FIRSTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cUsuarioCodigo",fld:"vCUSUARIOCODIGO"},{av:"AV7cAcessoEmpresaId",fld:"vCACESSOEMPRESAID"},{av:"AV8cAcessoPrivilegio",fld:"vCACESSOPRIVILEGIO"},{av:"AV9cAcessoEmpresaValidade",fld:"vCACESSOEMPRESAVALIDADE"},{av:"AV10cAcessoEmpresaUltAtualizacao",fld:"vCACESSOEMPRESAULTATUALIZACAO"},{av:"AV11pUsuarioId",fld:"vPUSUARIOID",hsh:!0}],[]];this.EvtParms.GRID1_PREVPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cUsuarioCodigo",fld:"vCUSUARIOCODIGO"},{av:"AV7cAcessoEmpresaId",fld:"vCACESSOEMPRESAID"},{av:"AV8cAcessoPrivilegio",fld:"vCACESSOPRIVILEGIO"},{av:"AV9cAcessoEmpresaValidade",fld:"vCACESSOEMPRESAVALIDADE"},{av:"AV10cAcessoEmpresaUltAtualizacao",fld:"vCACESSOEMPRESAULTATUALIZACAO"},{av:"AV11pUsuarioId",fld:"vPUSUARIOID",hsh:!0}],[]];this.EvtParms.GRID1_NEXTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cUsuarioCodigo",fld:"vCUSUARIOCODIGO"},{av:"AV7cAcessoEmpresaId",fld:"vCACESSOEMPRESAID"},{av:"AV8cAcessoPrivilegio",fld:"vCACESSOPRIVILEGIO"},{av:"AV9cAcessoEmpresaValidade",fld:"vCACESSOEMPRESAVALIDADE"},{av:"AV10cAcessoEmpresaUltAtualizacao",fld:"vCACESSOEMPRESAULTATUALIZACAO"},{av:"AV11pUsuarioId",fld:"vPUSUARIOID",hsh:!0}],[]];this.EvtParms.GRID1_LASTPAGE=[[{av:"GRID1_nFirstRecordOnPage"},{av:"GRID1_nEOF"},{av:"subGrid1_Rows"},{av:"AV6cUsuarioCodigo",fld:"vCUSUARIOCODIGO"},{av:"AV7cAcessoEmpresaId",fld:"vCACESSOEMPRESAID"},{av:"AV8cAcessoPrivilegio",fld:"vCACESSOPRIVILEGIO"},{av:"AV9cAcessoEmpresaValidade",fld:"vCACESSOEMPRESAVALIDADE"},{av:"AV10cAcessoEmpresaUltAtualizacao",fld:"vCACESSOEMPRESAULTATUALIZACAO"},{av:"AV11pUsuarioId",fld:"vPUSUARIOID",hsh:!0}],[]];this.setVCMap("AV11pUsuarioId","vPUSUARIOID",0,"int");this.setVCMap("AV12pUsuarioCodigo","vPUSUARIOCODIGO",0,"char");this.setVCMap("AV13pAcessoEmpresaId","vPACESSOEMPRESAID",0,"char");this.setVCMap("AV11pUsuarioId","vPUSUARIOID",0,"int");t.addRefreshingVar(this.GXValidFnc[16]);t.addRefreshingVar(this.GXValidFnc[26]);t.addRefreshingVar(this.GXValidFnc[36]);t.addRefreshingVar(this.GXValidFnc[46]);t.addRefreshingVar(this.GXValidFnc[56]);t.addRefreshingVar({rfrVar:"AV11pUsuarioId"});this.InitStandaloneVars()});gx.setParentObj(new gx00x1)