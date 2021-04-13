/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:46:26.51
*/
gx.evt.autoSkip = false;
gx.define('gx0lu0', false, function () {
   this.ServerClass =  "gx0lu0" ;
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
      this.AV13pFVEmpresa=gx.fn.getControlValue("vPFVEMPRESA") ;
      this.AV14pFVId=gx.fn.getIntegerValue("vPFVID",'.') ;
   };
   this.e132832_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e142831_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,58,59,60,61,62,65];
   this.GXLastCtrlId =65;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0lu0",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(10617,53,"FVEMPRESA","FVEmpresa","","FVEmpresa","char",0,"px",10,10,"left",null,[],10617,"FVEmpresa",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10618,54,"FVID","FVId","","FVId","int",0,"px",10,10,"right",null,[],10618,"FVId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10623,55,"FVUSUARIO","FVUsuario","Selecionar","FVUsuario","char",0,"px",12,12,"left",null,[],10623,"FVUsuario",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10624,56,"FVDATAVENDA","Venda","","FVDataVenda","date",0,"px",10,10,"right",null,[],10624,"FVDataVenda",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10622,57,"FVCLIENTECODIGO","Codigo","","FVClienteCodigo","int",0,"px",7,7,"right",null,[],10622,"FVClienteCodigo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10647,58,"FVCLIENTECPF","Cpf","","FVClienteCpf","char",0,"px",14,14,"left",null,[],10647,"FVClienteCpf",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10648,59,"FVCLIENTECNPJ","Cnpj","","FVClienteCnpj","char",0,"px",18,18,"left",null,[],10648,"FVClienteCnpj",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10625,60,"FVINSCESTADUAL","Estadual","","FVInscEstadual","svchar",0,"px",18,18,"left",null,[],10625,"FVInscEstadual",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10627,61,"FVNUMERO","FVNumero","","FVNumero","int",0,"px",7,7,"right",null,[],10627,"FVNumero",true,0,false,false,"Attribute",1,"");
   Grid1Container.addComboBox(10631,62,"FVUF","FVUF","FVUF","char",null,0,true,false,0,"px","");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKFVEMPRESA", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFVEMPRESA",gxz:"ZV6cFVEmpresa",gxold:"OV6cFVEmpresa",gxvar:"AV6cFVEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cFVEmpresa=Value},v2z:function(Value){gx.O.ZV6cFVEmpresa=Value},v2c:function(){gx.fn.setControlValue("vCFVEMPRESA",gx.O.AV6cFVEmpresa,0)},c2v:function(){gx.O.AV6cFVEmpresa=this.val()},val:function(){return gx.fn.getControlValue("vCFVEMPRESA")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKFVID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFVID",gxz:"ZV7cFVId",gxold:"OV7cFVId",gxvar:"AV7cFVId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cFVId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cFVId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFVID",gx.O.AV7cFVId,0)},c2v:function(){gx.O.AV7cFVId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFVID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKFVUSUARIO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFVUSUARIO",gxz:"ZV8cFVUsuario",gxold:"OV8cFVUsuario",gxvar:"AV8cFVUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cFVUsuario=Value},v2z:function(Value){gx.O.ZV8cFVUsuario=Value},v2c:function(){gx.fn.setControlValue("vCFVUSUARIO",gx.O.AV8cFVUsuario,0)},c2v:function(){gx.O.AV8cFVUsuario=this.val()},val:function(){return gx.fn.getControlValue("vCFVUSUARIO")},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKFVDATAVENDA", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"date",len:10,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFVDATAVENDA",gxz:"ZV9cFVDataVenda",gxold:"OV9cFVDataVenda",gxvar:"AV9cFVDataVenda",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cFVDataVenda=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.ZV9cFVDataVenda=gx.fn.toDatetimeValue(Value)},v2c:function(){gx.fn.setControlValue("vCFVDATAVENDA",gx.O.AV9cFVDataVenda,0)},c2v:function(){gx.O.AV9cFVDataVenda=gx.fn.toDatetimeValue(this.val())},val:function(){return gx.fn.getControlValue("vCFVDATAVENDA")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKFVCLIENTECODIGO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFVCLIENTECODIGO",gxz:"ZV10cFVClienteCodigo",gxold:"OV10cFVClienteCodigo",gxvar:"AV10cFVClienteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cFVClienteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cFVClienteCodigo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCFVCLIENTECODIGO",gx.O.AV10cFVClienteCodigo,0)},c2v:function(){gx.O.AV10cFVClienteCodigo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCFVCLIENTECODIGO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKFVCLIENTECPF", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"char",len:14,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFVCLIENTECPF",gxz:"ZV11cFVClienteCpf",gxold:"OV11cFVClienteCpf",gxvar:"AV11cFVClienteCpf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cFVClienteCpf=Value},v2z:function(Value){gx.O.ZV11cFVClienteCpf=Value},v2c:function(){gx.fn.setControlValue("vCFVCLIENTECPF",gx.O.AV11cFVClienteCpf,0)},c2v:function(){gx.O.AV11cFVClienteCpf=this.val()},val:function(){return gx.fn.getControlValue("vCFVCLIENTECPF")},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKFVCLIENTECNPJ", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:18,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCFVCLIENTECNPJ",gxz:"ZV12cFVClienteCnpj",gxold:"OV12cFVClienteCnpj",gxvar:"AV12cFVClienteCnpj",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cFVClienteCnpj=Value},v2z:function(Value){gx.O.ZV12cFVClienteCnpj=Value},v2c:function(){gx.fn.setControlValue("vCFVCLIENTECNPJ",gx.O.AV12cFVClienteCnpj,0)},c2v:function(){gx.O.AV12cFVClienteCnpj=this.val()},val:function(){return gx.fn.getControlValue("vCFVCLIENTECNPJ")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV17Linkselection_GXI)},c2v:function(){gx.O.AV17Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV17Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVEMPRESA",gxz:"Z10617FVEmpresa",gxold:"O10617FVEmpresa",gxvar:"A10617FVEmpresa",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10617FVEmpresa=Value},v2z:function(Value){gx.O.Z10617FVEmpresa=Value},v2c:function(row){gx.fn.setGridControlValue("FVEMPRESA",row || gx.fn.currentGridRowImpl(51),gx.O.A10617FVEmpresa,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10617FVEmpresa=this.val()},val:function(row){return gx.fn.getGridControlValue("FVEMPRESA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVID",gxz:"Z10618FVId",gxold:"O10618FVId",gxvar:"A10618FVId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10618FVId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10618FVId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FVID",row || gx.fn.currentGridRowImpl(51),gx.O.A10618FVId,0)},c2v:function(){gx.O.A10618FVId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FVID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVUSUARIO",gxz:"Z10623FVUsuario",gxold:"O10623FVUsuario",gxvar:"A10623FVUsuario",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10623FVUsuario=Value},v2z:function(Value){gx.O.Z10623FVUsuario=Value},v2c:function(row){gx.fn.setGridControlValue("FVUSUARIO",row || gx.fn.currentGridRowImpl(51),gx.O.A10623FVUsuario,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10623FVUsuario=this.val()},val:function(row){return gx.fn.getGridControlValue("FVUSUARIO",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"date",len:10,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVDATAVENDA",gxz:"Z10624FVDataVenda",gxold:"O10624FVDataVenda",gxvar:"A10624FVDataVenda",dp:{f:0,st:false,wn:false,mf:false,pic:"99/99/9999",dec:0},ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10624FVDataVenda=gx.fn.toDatetimeValue(Value)},v2z:function(Value){gx.O.Z10624FVDataVenda=gx.fn.toDatetimeValue(Value)},v2c:function(row){gx.fn.setGridControlValue("FVDATAVENDA",row || gx.fn.currentGridRowImpl(51),gx.O.A10624FVDataVenda,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10624FVDataVenda=gx.fn.toDatetimeValue(this.val())},val:function(row){return gx.fn.getGridDateTimeValue("FVDATAVENDA",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVCLIENTECODIGO",gxz:"Z10622FVClienteCodigo",gxold:"O10622FVClienteCodigo",gxvar:"A10622FVClienteCodigo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10622FVClienteCodigo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10622FVClienteCodigo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FVCLIENTECODIGO",row || gx.fn.currentGridRowImpl(51),gx.O.A10622FVClienteCodigo,0)},c2v:function(){gx.O.A10622FVClienteCodigo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FVCLIENTECODIGO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:2,type:"char",len:14,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVCLIENTECPF",gxz:"Z10647FVClienteCpf",gxold:"O10647FVClienteCpf",gxvar:"A10647FVClienteCpf",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10647FVClienteCpf=Value},v2z:function(Value){gx.O.Z10647FVClienteCpf=Value},v2c:function(row){gx.fn.setGridControlValue("FVCLIENTECPF",row || gx.fn.currentGridRowImpl(51),gx.O.A10647FVClienteCpf,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10647FVClienteCpf=this.val()},val:function(row){return gx.fn.getGridControlValue("FVCLIENTECPF",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[59]={lvl:2,type:"char",len:18,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVCLIENTECNPJ",gxz:"Z10648FVClienteCnpj",gxold:"O10648FVClienteCnpj",gxvar:"A10648FVClienteCnpj",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10648FVClienteCnpj=Value},v2z:function(Value){gx.O.Z10648FVClienteCnpj=Value},v2c:function(row){gx.fn.setGridControlValue("FVCLIENTECNPJ",row || gx.fn.currentGridRowImpl(51),gx.O.A10648FVClienteCnpj,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10648FVClienteCnpj=this.val()},val:function(row){return gx.fn.getGridControlValue("FVCLIENTECNPJ",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[60]={lvl:2,type:"svchar",len:18,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVINSCESTADUAL",gxz:"Z10625FVInscEstadual",gxold:"O10625FVInscEstadual",gxvar:"A10625FVInscEstadual",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10625FVInscEstadual=Value},v2z:function(Value){gx.O.Z10625FVInscEstadual=Value},v2c:function(row){gx.fn.setGridControlValue("FVINSCESTADUAL",row || gx.fn.currentGridRowImpl(51),gx.O.A10625FVInscEstadual,0)},c2v:function(){gx.O.A10625FVInscEstadual=this.val()},val:function(row){return gx.fn.getGridControlValue("FVINSCESTADUAL",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[61]={lvl:2,type:"int",len:7,dec:0,sign:false,pic:"ZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVNUMERO",gxz:"Z10627FVNumero",gxold:"O10627FVNumero",gxvar:"A10627FVNumero",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10627FVNumero=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10627FVNumero=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("FVNUMERO",row || gx.fn.currentGridRowImpl(51),gx.O.A10627FVNumero,0)},c2v:function(){gx.O.A10627FVNumero=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("FVNUMERO",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[62]={lvl:2,type:"char",len:2,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"FVUF",gxz:"Z10631FVUF",gxold:"O10631FVUF",gxvar:"A10631FVUF",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",inputType:'text',v2v:function(Value){gx.O.A10631FVUF=Value},v2z:function(Value){gx.O.Z10631FVUF=Value},v2c:function(row){gx.fn.setGridComboBoxValue("FVUF",row || gx.fn.currentGridRowImpl(51),gx.O.A10631FVUF);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10631FVUF=this.val()},val:function(row){return gx.fn.getGridControlValue("FVUF",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[65]={fld:"TABLE4",grid:0};
   this.AV6cFVEmpresa = "" ;
   this.ZV6cFVEmpresa = "" ;
   this.OV6cFVEmpresa = "" ;
   this.AV7cFVId = 0 ;
   this.ZV7cFVId = 0 ;
   this.OV7cFVId = 0 ;
   this.AV8cFVUsuario = "" ;
   this.ZV8cFVUsuario = "" ;
   this.OV8cFVUsuario = "" ;
   this.AV9cFVDataVenda = gx.date.nullDate() ;
   this.ZV9cFVDataVenda = gx.date.nullDate() ;
   this.OV9cFVDataVenda = gx.date.nullDate() ;
   this.AV10cFVClienteCodigo = 0 ;
   this.ZV10cFVClienteCodigo = 0 ;
   this.OV10cFVClienteCodigo = 0 ;
   this.AV11cFVClienteCpf = "" ;
   this.ZV11cFVClienteCpf = "" ;
   this.OV11cFVClienteCpf = "" ;
   this.AV12cFVClienteCnpj = "" ;
   this.ZV12cFVClienteCnpj = "" ;
   this.OV12cFVClienteCnpj = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z10617FVEmpresa = "" ;
   this.O10617FVEmpresa = "" ;
   this.Z10618FVId = 0 ;
   this.O10618FVId = 0 ;
   this.Z10623FVUsuario = "" ;
   this.O10623FVUsuario = "" ;
   this.Z10624FVDataVenda = gx.date.nullDate() ;
   this.O10624FVDataVenda = gx.date.nullDate() ;
   this.Z10622FVClienteCodigo = 0 ;
   this.O10622FVClienteCodigo = 0 ;
   this.Z10647FVClienteCpf = "" ;
   this.O10647FVClienteCpf = "" ;
   this.Z10648FVClienteCnpj = "" ;
   this.O10648FVClienteCnpj = "" ;
   this.Z10625FVInscEstadual = "" ;
   this.O10625FVInscEstadual = "" ;
   this.Z10627FVNumero = 0 ;
   this.O10627FVNumero = 0 ;
   this.Z10631FVUF = "" ;
   this.O10631FVUF = "" ;
   this.AV6cFVEmpresa = "" ;
   this.AV7cFVId = 0 ;
   this.AV8cFVUsuario = "" ;
   this.AV9cFVDataVenda = gx.date.nullDate() ;
   this.AV10cFVClienteCodigo = 0 ;
   this.AV11cFVClienteCpf = "" ;
   this.AV12cFVClienteCnpj = "" ;
   this.AV13pFVEmpresa = "" ;
   this.AV14pFVId = 0 ;
   this.AV5LinkSelection = "" ;
   this.A10617FVEmpresa = "" ;
   this.A10618FVId = 0 ;
   this.A10623FVUsuario = "" ;
   this.A10624FVDataVenda = gx.date.nullDate() ;
   this.A10622FVClienteCodigo = 0 ;
   this.A10647FVClienteCpf = "" ;
   this.A10648FVClienteCnpj = "" ;
   this.A10625FVInscEstadual = "" ;
   this.A10627FVNumero = 0 ;
   this.A10631FVUF = "" ;
   this.Events = {"e132832_client": ["ENTER", true] ,"e142831_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFVEmpresa',fld:'vCFVEMPRESA'},{av:'AV7cFVId',fld:'vCFVID'},{av:'AV8cFVUsuario',fld:'vCFVUSUARIO'},{av:'AV9cFVDataVenda',fld:'vCFVDATAVENDA'},{av:'AV10cFVClienteCodigo',fld:'vCFVCLIENTECODIGO'},{av:'AV11cFVClienteCpf',fld:'vCFVCLIENTECPF'},{av:'AV12cFVClienteCnpj',fld:'vCFVCLIENTECNPJ'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A10617FVEmpresa',fld:'FVEMPRESA'},{av:'A10618FVId',fld:'FVID'}],[{av:'AV13pFVEmpresa',fld:'vPFVEMPRESA'},{av:'AV14pFVId',fld:'vPFVID'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFVEmpresa',fld:'vCFVEMPRESA'},{av:'AV7cFVId',fld:'vCFVID'},{av:'AV8cFVUsuario',fld:'vCFVUSUARIO'},{av:'AV9cFVDataVenda',fld:'vCFVDATAVENDA'},{av:'AV10cFVClienteCodigo',fld:'vCFVCLIENTECODIGO'},{av:'AV11cFVClienteCpf',fld:'vCFVCLIENTECPF'},{av:'AV12cFVClienteCnpj',fld:'vCFVCLIENTECNPJ'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFVEmpresa',fld:'vCFVEMPRESA'},{av:'AV7cFVId',fld:'vCFVID'},{av:'AV8cFVUsuario',fld:'vCFVUSUARIO'},{av:'AV9cFVDataVenda',fld:'vCFVDATAVENDA'},{av:'AV10cFVClienteCodigo',fld:'vCFVCLIENTECODIGO'},{av:'AV11cFVClienteCpf',fld:'vCFVCLIENTECPF'},{av:'AV12cFVClienteCnpj',fld:'vCFVCLIENTECNPJ'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFVEmpresa',fld:'vCFVEMPRESA'},{av:'AV7cFVId',fld:'vCFVID'},{av:'AV8cFVUsuario',fld:'vCFVUSUARIO'},{av:'AV9cFVDataVenda',fld:'vCFVDATAVENDA'},{av:'AV10cFVClienteCodigo',fld:'vCFVCLIENTECODIGO'},{av:'AV11cFVClienteCpf',fld:'vCFVCLIENTECPF'},{av:'AV12cFVClienteCnpj',fld:'vCFVCLIENTECNPJ'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cFVEmpresa',fld:'vCFVEMPRESA'},{av:'AV7cFVId',fld:'vCFVID'},{av:'AV8cFVUsuario',fld:'vCFVUSUARIO'},{av:'AV9cFVDataVenda',fld:'vCFVDATAVENDA'},{av:'AV10cFVClienteCodigo',fld:'vCFVCLIENTECODIGO'},{av:'AV11cFVClienteCpf',fld:'vCFVCLIENTECPF'},{av:'AV12cFVClienteCnpj',fld:'vCFVCLIENTECNPJ'}],[]];
   this.setVCMap("AV13pFVEmpresa", "vPFVEMPRESA", 0, "char");
   this.setVCMap("AV14pFVId", "vPFVID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0lu0());
