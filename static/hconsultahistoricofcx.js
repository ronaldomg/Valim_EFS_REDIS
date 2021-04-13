/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 12:55:14.13
*/
gx.evt.autoSkip = false;
gx.define('hconsultahistoricofcx', false, function () {
   this.ServerClass =  "hconsultahistoricofcx" ;
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
      this.A3544HistoricoFcxExiComplemento=gx.fn.getControlValue("HISTORICOFCXEXICOMPLEMENTO") ;
      this.A3545HistoricoFcxAbreGaveta=gx.fn.getControlValue("HISTORICOFCXABREGAVETA") ;
      this.AV26HistoricoFcxCodOut=gx.fn.getIntegerValue("vHISTORICOFCXCODOUT",'.') ;
   };
   this.e17n72_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11n72_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", true, null, false, false);
   };
   this.e12n72_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", true, null, false, false);
   };
   this.e13n72_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", true, null, false, false);
   };
   this.e14n72_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", true, null, false, false);
   };
   this.e15n72_client=function()
   {
      this.executeServerEvent("'PROCURAR'", false, null, false, false);
   };
   this.e20n72_client=function()
   {
      this.executeServerEvent("'ATUALIZAPAGINA'", true, arguments[0], false, false);
   };
   this.e21n71_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,5,8,11,13,15,17,20,22,24,26,32,33,34,35,36,37,38,39,45,48,50,52,54,56,57,58,59];
   this.GXLastCtrlId =59;
   this.GridContainer = new gx.grid.grid(this, 2,"WbpLvl2",31,"Grid","Grid","GridContainer",this.CmpContext,this.IsMasterPage,"hconsultahistoricofcx",[],false,1,true,true,0,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var GridContainer = this.GridContainer;
   GridContainer.addSingleLineEdit(3550,32,"HISTORICOFCXID","","","HistoricoFcxId","int",0,"px",4,4,"right",null,[],3550,"HistoricoFcxId",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3540,33,"HISTORICOFCXDESCRICAO","","","HistoricoFcxDescricao","svchar",0,"px",30,30,"left",null,[],3540,"HistoricoFcxDescricao",true,0,false,false,"SemQuebraGrid",1,"");
   GridContainer.addSingleLineEdit("Historicofcxtipodesc",34,"vHISTORICOFCXTIPODESC","","","HistoricoFcxTipoDesc","char",0,"px",15,15,"left",null,[],"Historicofcxtipodesc","HistoricoFcxTipoDesc",true,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit("Historicofcxsinaldesc",35,"vHISTORICOFCXSINALDESC","","","HistoricoFcxSinalDesc","char",0,"px",10,10,"left",null,[],"Historicofcxsinaldesc","HistoricoFcxSinalDesc",true,0,false,false,"Attribute",1,"");
   GridContainer.addBitmap("&Bmphistoricofcxabregaveta","vBMPHISTORICOFCXABREGAVETA",36,0,"px",17,"px",null,"","Gaveta","Image","");
   GridContainer.addBitmap("&Bmphistoricofcxexcomp","vBMPHISTORICOFCXEXCOMP",37,0,"px",17,"px",null,"","Complemento","Image","");
   GridContainer.addSingleLineEdit(3543,38,"HISTORICOFCXTIPO","Tipo de Histórico","","HistoricoFcxTipo","char",0,"px",1,1,"left",null,[],3543,"HistoricoFcxTipo",false,0,false,false,"Attribute",1,"");
   GridContainer.addSingleLineEdit(3542,39,"HISTORICOFCXSINAL","Histórico","","HistoricoFcxSinal","char",0,"px",1,1,"left",null,[],3542,"HistoricoFcxSinal",false,0,false,false,"Attribute",1,"");
   this.setGrid(GridContainer);
   GXValidFnc[2]={fld:"TABLEPRINCIPAL",grid:0};
   GXValidFnc[5]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLEFILTROS",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vHISTORICOFCXID",gxz:"ZV16HistoricoFcxid",gxold:"OV16HistoricoFcxid",gxvar:"AV16HistoricoFcxid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV16HistoricoFcxid=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV16HistoricoFcxid=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vHISTORICOFCXID",gx.O.AV16HistoricoFcxid,0)},c2v:function(){gx.O.AV16HistoricoFcxid=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vHISTORICOFCXID",'.')},nac:gx.falseFn};
   GXValidFnc[15]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[17]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vHISTORICOFCXSINAL",gxz:"ZV19HistoricoFcxSinal",gxold:"OV19HistoricoFcxSinal",gxvar:"AV19HistoricoFcxSinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV19HistoricoFcxSinal=Value},v2z:function(Value){gx.O.ZV19HistoricoFcxSinal=Value},v2c:function(){gx.fn.setComboBoxValue("vHISTORICOFCXSINAL",gx.O.AV19HistoricoFcxSinal)},c2v:function(){gx.O.AV19HistoricoFcxSinal=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOFCXSINAL")},nac:gx.falseFn};
   GXValidFnc[20]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[22]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vHISTORICOFCXDESCRICAO",gxz:"ZV18HistoricoFcxDescricao",gxold:"OV18HistoricoFcxDescricao",gxvar:"AV18HistoricoFcxDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV18HistoricoFcxDescricao=Value},v2z:function(Value){gx.O.ZV18HistoricoFcxDescricao=Value},v2c:function(){gx.fn.setControlValue("vHISTORICOFCXDESCRICAO",gx.O.AV18HistoricoFcxDescricao,0)},c2v:function(){gx.O.AV18HistoricoFcxDescricao=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOFCXDESCRICAO")},nac:gx.falseFn};
   GXValidFnc[24]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[26]={lvl:0,type:"char",len:1,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vHISTORICOFCXTIPO",gxz:"ZV17HistoricoFcxTipo",gxold:"OV17HistoricoFcxTipo",gxvar:"AV17HistoricoFcxTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV17HistoricoFcxTipo=Value},v2z:function(Value){gx.O.ZV17HistoricoFcxTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vHISTORICOFCXTIPO",gx.O.AV17HistoricoFcxTipo)},c2v:function(){gx.O.AV17HistoricoFcxTipo=this.val()},val:function(){return gx.fn.getControlValue("vHISTORICOFCXTIPO")},nac:gx.falseFn};
   GXValidFnc[32]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXID",gxz:"Z3550HistoricoFcxId",gxold:"O3550HistoricoFcxId",gxvar:"A3550HistoricoFcxId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A3550HistoricoFcxId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z3550HistoricoFcxId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("HISTORICOFCXID",row || gx.fn.currentGridRowImpl(31),gx.O.A3550HistoricoFcxId,0)},c2v:function(){gx.O.A3550HistoricoFcxId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("HISTORICOFCXID",row || gx.fn.currentGridRowImpl(31),'.')},nac:gx.falseFn};
   GXValidFnc[33]={lvl:2,type:"svchar",len:30,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXDESCRICAO",gxz:"Z3540HistoricoFcxDescricao",gxold:"O3540HistoricoFcxDescricao",gxvar:"A3540HistoricoFcxDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3540HistoricoFcxDescricao=Value},v2z:function(Value){gx.O.Z3540HistoricoFcxDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOFCXDESCRICAO",row || gx.fn.currentGridRowImpl(31),gx.O.A3540HistoricoFcxDescricao,0)},c2v:function(){gx.O.A3540HistoricoFcxDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOFCXDESCRICAO",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[34]={lvl:2,type:"char",len:15,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOFCXTIPODESC",gxz:"ZV20HistoricoFcxTipoDesc",gxold:"OV20HistoricoFcxTipoDesc",gxvar:"AV20HistoricoFcxTipoDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV20HistoricoFcxTipoDesc=Value},v2z:function(Value){gx.O.ZV20HistoricoFcxTipoDesc=Value},v2c:function(row){gx.fn.setGridControlValue("vHISTORICOFCXTIPODESC",row || gx.fn.currentGridRowImpl(31),gx.O.AV20HistoricoFcxTipoDesc,0)},c2v:function(){gx.O.AV20HistoricoFcxTipoDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vHISTORICOFCXTIPODESC",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[35]={lvl:2,type:"char",len:10,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vHISTORICOFCXSINALDESC",gxz:"ZV21HistoricoFcxSinalDesc",gxold:"OV21HistoricoFcxSinalDesc",gxvar:"AV21HistoricoFcxSinalDesc",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.AV21HistoricoFcxSinalDesc=Value},v2z:function(Value){gx.O.ZV21HistoricoFcxSinalDesc=Value},v2c:function(row){gx.fn.setGridControlValue("vHISTORICOFCXSINALDESC",row || gx.fn.currentGridRowImpl(31),gx.O.AV21HistoricoFcxSinalDesc,0)},c2v:function(){gx.O.AV21HistoricoFcxSinalDesc=this.val()},val:function(row){return gx.fn.getGridControlValue("vHISTORICOFCXSINALDESC",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[36]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPHISTORICOFCXABREGAVETA",gxz:"ZV23bmpHistoricoFcxAbreGaveta",gxold:"OV23bmpHistoricoFcxAbreGaveta",gxvar:"AV23bmpHistoricoFcxAbreGaveta",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV23bmpHistoricoFcxAbreGaveta=Value},v2z:function(Value){gx.O.ZV23bmpHistoricoFcxAbreGaveta=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPHISTORICOFCXABREGAVETA",row || gx.fn.currentGridRowImpl(31),gx.O.AV23bmpHistoricoFcxAbreGaveta,gx.O.AV33Bmphistoricofcxabregaveta_GXI)},c2v:function(){gx.O.AV33Bmphistoricofcxabregaveta_GXI=this.val_GXI();gx.O.AV23bmpHistoricoFcxAbreGaveta=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPHISTORICOFCXABREGAVETA",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPHISTORICOFCXABREGAVETA_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV33Bmphistoricofcxabregaveta_GXI',nac:gx.falseFn};
   GXValidFnc[37]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"vBMPHISTORICOFCXEXCOMP",gxz:"ZV22bmpHistoricoFcxExComp",gxold:"OV22bmpHistoricoFcxExComp",gxvar:"AV22bmpHistoricoFcxExComp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV22bmpHistoricoFcxExComp=Value},v2z:function(Value){gx.O.ZV22bmpHistoricoFcxExComp=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vBMPHISTORICOFCXEXCOMP",row || gx.fn.currentGridRowImpl(31),gx.O.AV22bmpHistoricoFcxExComp,gx.O.AV32Bmphistoricofcxexcomp_GXI)},c2v:function(){gx.O.AV32Bmphistoricofcxexcomp_GXI=this.val_GXI();gx.O.AV22bmpHistoricoFcxExComp=this.val()},val:function(row){return gx.fn.getGridControlValue("vBMPHISTORICOFCXEXCOMP",row || gx.fn.currentGridRowImpl(31))},val_GXI:function(row){return gx.fn.getGridControlValue("vBMPHISTORICOFCXEXCOMP_GXI",row || gx.fn.currentGridRowImpl(31))}, gxvar_GXI:'AV32Bmphistoricofcxexcomp_GXI',nac:gx.falseFn};
   GXValidFnc[38]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXTIPO",gxz:"Z3543HistoricoFcxTipo",gxold:"O3543HistoricoFcxTipo",gxvar:"A3543HistoricoFcxTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3543HistoricoFcxTipo=Value},v2z:function(Value){gx.O.Z3543HistoricoFcxTipo=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOFCXTIPO",row || gx.fn.currentGridRowImpl(31),gx.O.A3543HistoricoFcxTipo,0)},c2v:function(){gx.O.A3543HistoricoFcxTipo=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOFCXTIPO",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[39]={lvl:2,type:"char",len:1,dec:0,sign:false,ro:1,isacc:0,grid:31,gxgrid:this.GridContainer,fnc:null,isvalid:null,rgrid:[],fld:"HISTORICOFCXSINAL",gxz:"Z3542HistoricoFcxSinal",gxold:"O3542HistoricoFcxSinal",gxvar:"A3542HistoricoFcxSinal",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A3542HistoricoFcxSinal=Value},v2z:function(Value){gx.O.Z3542HistoricoFcxSinal=Value},v2c:function(row){gx.fn.setGridControlValue("HISTORICOFCXSINAL",row || gx.fn.currentGridRowImpl(31),gx.O.A3542HistoricoFcxSinal,0)},c2v:function(){gx.O.A3542HistoricoFcxSinal=this.val()},val:function(row){return gx.fn.getGridControlValue("HISTORICOFCXSINAL",row || gx.fn.currentGridRowImpl(31))},nac:gx.falseFn};
   GXValidFnc[45]={fld:"TABLENAV",grid:0};
   GXValidFnc[48]={fld:"BTNPRIMEIRO",grid:0};
   GXValidFnc[50]={fld:"BTNANTERIOR",grid:0};
   GXValidFnc[52]={fld:"BTNPROXIMO",grid:0};
   GXValidFnc[54]={fld:"BTNULTIMO",grid:0};
   GXValidFnc[56]={fld:"BTNFECHAR",grid:0};
   GXValidFnc[57]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINA",gxz:"ZV28Pagina",gxold:"OV28Pagina",gxvar:"AV28Pagina",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV28Pagina=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV28Pagina=gx.num.intval(Value)},v2c:function(){gx.fn.setComboBoxValue("vPAGINA",gx.O.AV28Pagina)},c2v:function(){gx.O.AV28Pagina=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINA",'.')},nac:gx.falseFn};
   GXValidFnc[58]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vPAGINAAUX",gxz:"ZV29PaginaAux",gxold:"OV29PaginaAux",gxvar:"AV29PaginaAux",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV29PaginaAux=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV29PaginaAux=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vPAGINAAUX",gx.O.AV29PaginaAux,0)},c2v:function(){gx.O.AV29PaginaAux=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vPAGINAAUX",'.')},nac:gx.falseFn};
   GXValidFnc[59]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.GridContainer],fld:"vORDEREDBY",gxz:"ZV5Orderedby",gxold:"OV5Orderedby",gxvar:"AV5Orderedby",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5Orderedby=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV5Orderedby=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vORDEREDBY",gx.O.AV5Orderedby,0)},c2v:function(){gx.O.AV5Orderedby=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vORDEREDBY",'.')},nac:gx.falseFn};
   this.AV16HistoricoFcxid = 0 ;
   this.ZV16HistoricoFcxid = 0 ;
   this.OV16HistoricoFcxid = 0 ;
   this.AV19HistoricoFcxSinal = "" ;
   this.ZV19HistoricoFcxSinal = "" ;
   this.OV19HistoricoFcxSinal = "" ;
   this.AV18HistoricoFcxDescricao = "" ;
   this.ZV18HistoricoFcxDescricao = "" ;
   this.OV18HistoricoFcxDescricao = "" ;
   this.AV17HistoricoFcxTipo = "" ;
   this.ZV17HistoricoFcxTipo = "" ;
   this.OV17HistoricoFcxTipo = "" ;
   this.Z3550HistoricoFcxId = 0 ;
   this.O3550HistoricoFcxId = 0 ;
   this.Z3540HistoricoFcxDescricao = "" ;
   this.O3540HistoricoFcxDescricao = "" ;
   this.ZV20HistoricoFcxTipoDesc = "" ;
   this.OV20HistoricoFcxTipoDesc = "" ;
   this.ZV21HistoricoFcxSinalDesc = "" ;
   this.OV21HistoricoFcxSinalDesc = "" ;
   this.ZV23bmpHistoricoFcxAbreGaveta = "" ;
   this.OV23bmpHistoricoFcxAbreGaveta = "" ;
   this.ZV22bmpHistoricoFcxExComp = "" ;
   this.OV22bmpHistoricoFcxExComp = "" ;
   this.Z3543HistoricoFcxTipo = "" ;
   this.O3543HistoricoFcxTipo = "" ;
   this.Z3542HistoricoFcxSinal = "" ;
   this.O3542HistoricoFcxSinal = "" ;
   this.AV28Pagina = 0 ;
   this.ZV28Pagina = 0 ;
   this.OV28Pagina = 0 ;
   this.AV29PaginaAux = 0 ;
   this.ZV29PaginaAux = 0 ;
   this.OV29PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.ZV5Orderedby = 0 ;
   this.OV5Orderedby = 0 ;
   this.AV16HistoricoFcxid = 0 ;
   this.AV19HistoricoFcxSinal = "" ;
   this.AV18HistoricoFcxDescricao = "" ;
   this.AV17HistoricoFcxTipo = "" ;
   this.AV28Pagina = 0 ;
   this.AV29PaginaAux = 0 ;
   this.AV5Orderedby = 0 ;
   this.AV26HistoricoFcxCodOut = 0 ;
   this.A3544HistoricoFcxExiComplemento = "" ;
   this.A3545HistoricoFcxAbreGaveta = "" ;
   this.A3549HistoricoFcxEmpresaID = "" ;
   this.A3550HistoricoFcxId = 0 ;
   this.A3540HistoricoFcxDescricao = "" ;
   this.AV20HistoricoFcxTipoDesc = "" ;
   this.AV21HistoricoFcxSinalDesc = "" ;
   this.AV23bmpHistoricoFcxAbreGaveta = "" ;
   this.AV22bmpHistoricoFcxExComp = "" ;
   this.A3543HistoricoFcxTipo = "" ;
   this.A3542HistoricoFcxSinal = "" ;
   this.AV12EmpresaPadrao = "" ;
   this.Events = {"e17n72_client": ["ENTER", true] ,"e11n72_client": ["'GXM_FIRST'", true] ,"e12n72_client": ["'GXM_PREVIOUS'", true] ,"e13n72_client": ["'GXM_NEXT'", true] ,"e14n72_client": ["'GXM_LAST'", true] ,"e15n72_client": ["'PROCURAR'", true] ,"e20n72_client": ["'ATUALIZAPAGINA'", true] ,"e21n71_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV19HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'},{av:'AV18HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV17HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3545HistoricoFcxAbreGaveta',fld:'HISTORICOFCXABREGAVETA'},{av:'AV5Orderedby',fld:'vORDEREDBY'}],[{ctrl:'HISTORICOFCXID',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOFCXID","Title")',ctrl:'HISTORICOFCXID',prop:'Title'},{av:'AV7Imagem',fld:'vIMAGEM'},{ctrl:'HISTORICOFCXDESCRICAO',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("HISTORICOFCXDESCRICAO","Title")',ctrl:'HISTORICOFCXDESCRICAO',prop:'Title'},{ctrl:'vHISTORICOFCXTIPODESC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vHISTORICOFCXTIPODESC","Title")',ctrl:'vHISTORICOFCXTIPODESC',prop:'Title'},{ctrl:'vHISTORICOFCXSINALDESC',prop:'Titleformat'},{av:'gx.fn.getCtrlProperty("vHISTORICOFCXSINALDESC","Title")',ctrl:'vHISTORICOFCXSINALDESC',prop:'Title'},{av:'AV29PaginaAux',fld:'vPAGINAAUX'},{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV27NumPagina',fld:'vNUMPAGINA'},{av:'gx.fn.getCtrlProperty("BTNANTERIOR","Enabled")',ctrl:'BTNANTERIOR',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPROXIMO","Enabled")',ctrl:'BTNPROXIMO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNPRIMEIRO","Enabled")',ctrl:'BTNPRIMEIRO',prop:'Enabled'},{av:'gx.fn.getCtrlProperty("BTNULTIMO","Enabled")',ctrl:'BTNULTIMO',prop:'Enabled'}]];
   this.EvtParms["ENTER"] = [[{av:'A3550HistoricoFcxId',fld:'HISTORICOFCXID'}],[{av:'AV26HistoricoFcxCodOut',fld:'vHISTORICOFCXCODOUT'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV19HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'},{av:'AV18HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV17HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3545HistoricoFcxAbreGaveta',fld:'HISTORICOFCXABREGAVETA'}],[{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV19HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'},{av:'AV18HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV17HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3545HistoricoFcxAbreGaveta',fld:'HISTORICOFCXABREGAVETA'},{av:'AV28Pagina',fld:'vPAGINA'}],[{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV19HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'},{av:'AV18HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV17HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3545HistoricoFcxAbreGaveta',fld:'HISTORICOFCXABREGAVETA'},{av:'AV28Pagina',fld:'vPAGINA'},{av:'AV29PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV19HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'},{av:'AV18HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV17HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3545HistoricoFcxAbreGaveta',fld:'HISTORICOFCXABREGAVETA'},{av:'AV29PaginaAux',fld:'vPAGINAAUX'}],[{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["GRID.LOAD"] = [[{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3545HistoricoFcxAbreGaveta',fld:'HISTORICOFCXABREGAVETA'}],[{av:'AV21HistoricoFcxSinalDesc',fld:'vHISTORICOFCXSINALDESC'},{av:'AV20HistoricoFcxTipoDesc',fld:'vHISTORICOFCXTIPODESC'},{av:'AV22bmpHistoricoFcxExComp',fld:'vBMPHISTORICOFCXEXCOMP'},{av:'AV23bmpHistoricoFcxAbreGaveta',fld:'vBMPHISTORICOFCXABREGAVETA'}]];
   this.EvtParms["'PROCURAR'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV19HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'},{av:'AV18HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV17HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3545HistoricoFcxAbreGaveta',fld:'HISTORICOFCXABREGAVETA'}],[{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV28Pagina',fld:'vPAGINA'}]];
   this.EvtParms["'ATUALIZAPAGINA'"] = [[{av:'GRID_nFirstRecordOnPage'},{av:'GRID_nEOF'},{av:'subGrid_Rows'},{av:'AV16HistoricoFcxid',fld:'vHISTORICOFCXID'},{av:'AV19HistoricoFcxSinal',fld:'vHISTORICOFCXSINAL'},{av:'AV18HistoricoFcxDescricao',fld:'vHISTORICOFCXDESCRICAO'},{av:'AV17HistoricoFcxTipo',fld:'vHISTORICOFCXTIPO'},{av:'AV5Orderedby',fld:'vORDEREDBY'},{av:'AV12EmpresaPadrao',fld:'vEMPRESAPADRAO'},{av:'A3542HistoricoFcxSinal',fld:'HISTORICOFCXSINAL'},{av:'A3543HistoricoFcxTipo',fld:'HISTORICOFCXTIPO'},{av:'A3544HistoricoFcxExiComplemento',fld:'HISTORICOFCXEXICOMPLEMENTO'},{av:'A3545HistoricoFcxAbreGaveta',fld:'HISTORICOFCXABREGAVETA'}],[]];
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A3544HistoricoFcxExiComplemento", "HISTORICOFCXEXICOMPLEMENTO", 0, "char");
   this.setVCMap("A3545HistoricoFcxAbreGaveta", "HISTORICOFCXABREGAVETA", 0, "char");
   this.setVCMap("AV26HistoricoFcxCodOut", "vHISTORICOFCXCODOUT", 0, "int");
   this.setVCMap("AV12EmpresaPadrao", "vEMPRESAPADRAO", 0, "char");
   this.setVCMap("A3544HistoricoFcxExiComplemento", "HISTORICOFCXEXICOMPLEMENTO", 0, "char");
   this.setVCMap("A3545HistoricoFcxAbreGaveta", "HISTORICOFCXABREGAVETA", 0, "char");
   GridContainer.addRefreshingVar(this.GXValidFnc[13]);
   GridContainer.addRefreshingVar(this.GXValidFnc[17]);
   GridContainer.addRefreshingVar(this.GXValidFnc[22]);
   GridContainer.addRefreshingVar(this.GXValidFnc[26]);
   GridContainer.addRefreshingVar(this.GXValidFnc[59]);
   GridContainer.addRefreshingVar({rfrVar:"AV12EmpresaPadrao"});
   GridContainer.addRefreshingVar({rfrVar:"A3542HistoricoFcxSinal", rfrProp:"Value", gxAttId:"3542"});
   GridContainer.addRefreshingVar({rfrVar:"A3543HistoricoFcxTipo", rfrProp:"Value", gxAttId:"3543"});
   GridContainer.addRefreshingVar({rfrVar:"A3544HistoricoFcxExiComplemento"});
   GridContainer.addRefreshingVar({rfrVar:"A3545HistoricoFcxAbreGaveta"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new hconsultahistoricofcx());
