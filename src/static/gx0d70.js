/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:37:56.1
*/
gx.evt.autoSkip = false;
gx.define('gx0d70', false, function () {
   this.ServerClass =  "gx0d70" ;
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
      this.AV13pMateriaPrimaProdFinalEmpId=gx.fn.getControlValue("vPMATERIAPRIMAPRODFINALEMPID") ;
      this.AV14pMateriaPrimaProdFinalId=gx.fn.getIntegerValue("vPMATERIAPRIMAPRODFINALID",'.') ;
      this.AV15pMateriaPrimaSeq=gx.fn.getIntegerValue("vPMATERIAPRIMASEQ",'.') ;
   };
   this.e131s42_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e141s41_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,39,42,44,47,48,52,53,54,55,56,57,60];
   this.GXLastCtrlId =60;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",51,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0d70",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",52,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(5533,53,"MATERIAPRIMAPRODFINALEMPID","Materia Prima Prod Final Emp Id","","MateriaPrimaProdFinalEmpId","char",0,"px",10,10,"left",null,[],5533,"MateriaPrimaProdFinalEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5534,54,"MATERIAPRIMAPRODFINALID","Materia Prima Prod Final Id","","MateriaPrimaProdFinalId","int",0,"px",10,10,"right",null,[],5534,"MateriaPrimaProdFinalId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5535,55,"MATERIAPRIMASEQ","Materia Prima Seq","","MateriaPrimaSeq","int",0,"px",4,4,"right",null,[],5535,"MateriaPrimaSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5527,56,"MATERIAPRIMAPRODEMPID","Materia Prima Prod Emp Id","","MateriaPrimaProdEmpId","char",0,"px",10,10,"left",null,[],5527,"MateriaPrimaProdEmpId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(5528,57,"MATERIAPRIMAPRODID","Materia Prima Prod Id","","MateriaPrimaProdId","int",0,"px",10,10,"right",null,[],5528,"MateriaPrimaProdId",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKMATERIAPRIMAPRODFINALEMPID", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMATERIAPRIMAPRODFINALEMPID",gxz:"ZV6cMateriaPrimaProdFinalEmpId",gxold:"OV6cMateriaPrimaProdFinalEmpId",gxvar:"AV6cMateriaPrimaProdFinalEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cMateriaPrimaProdFinalEmpId=Value},v2z:function(Value){gx.O.ZV6cMateriaPrimaProdFinalEmpId=Value},v2c:function(){gx.fn.setControlValue("vCMATERIAPRIMAPRODFINALEMPID",gx.O.AV6cMateriaPrimaProdFinalEmpId,0)},c2v:function(){gx.O.AV6cMateriaPrimaProdFinalEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCMATERIAPRIMAPRODFINALEMPID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKMATERIAPRIMAPRODFINALID", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMATERIAPRIMAPRODFINALID",gxz:"ZV7cMateriaPrimaProdFinalId",gxold:"OV7cMateriaPrimaProdFinalId",gxvar:"AV7cMateriaPrimaProdFinalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cMateriaPrimaProdFinalId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV7cMateriaPrimaProdFinalId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMATERIAPRIMAPRODFINALID",gx.O.AV7cMateriaPrimaProdFinalId,0)},c2v:function(){gx.O.AV7cMateriaPrimaProdFinalId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMATERIAPRIMAPRODFINALID",'.')},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKMATERIAPRIMASEQ", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMATERIAPRIMASEQ",gxz:"ZV8cMateriaPrimaSeq",gxold:"OV8cMateriaPrimaSeq",gxvar:"AV8cMateriaPrimaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cMateriaPrimaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cMateriaPrimaSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMATERIAPRIMASEQ",gx.O.AV8cMateriaPrimaSeq,0)},c2v:function(){gx.O.AV8cMateriaPrimaSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMATERIAPRIMASEQ",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKMATERIAPRIMAPRODEMPID", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMATERIAPRIMAPRODEMPID",gxz:"ZV9cMateriaPrimaProdEmpId",gxold:"OV9cMateriaPrimaProdEmpId",gxvar:"AV9cMateriaPrimaProdEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cMateriaPrimaProdEmpId=Value},v2z:function(Value){gx.O.ZV9cMateriaPrimaProdEmpId=Value},v2c:function(){gx.fn.setControlValue("vCMATERIAPRIMAPRODEMPID",gx.O.AV9cMateriaPrimaProdEmpId,0)},c2v:function(){gx.O.AV9cMateriaPrimaProdEmpId=this.val()},val:function(){return gx.fn.getControlValue("vCMATERIAPRIMAPRODEMPID")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKMATERIAPRIMAPRODID", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMATERIAPRIMAPRODID",gxz:"ZV10cMateriaPrimaProdId",gxold:"OV10cMateriaPrimaProdId",gxvar:"AV10cMateriaPrimaProdId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cMateriaPrimaProdId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cMateriaPrimaProdId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCMATERIAPRIMAPRODID",gx.O.AV10cMateriaPrimaProdId,0)},c2v:function(){gx.O.AV10cMateriaPrimaProdId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCMATERIAPRIMAPRODID",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"TEXTBLOCKMATERIAPRIMAQTDE", format:0,grid:0};
   GXValidFnc[39]={lvl:0,type:"decimal",len:16,dec:6,sign:false,pic:"ZZZ,ZZZ,ZZ9.999999",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMATERIAPRIMAQTDE",gxz:"ZV11cMateriaPrimaQtde",gxold:"OV11cMateriaPrimaQtde",gxvar:"AV11cMateriaPrimaQtde",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV11cMateriaPrimaQtde=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.ZV11cMateriaPrimaQtde=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("vCMATERIAPRIMAQTDE",gx.O.AV11cMateriaPrimaQtde,6,',')},c2v:function(){gx.O.AV11cMateriaPrimaQtde=this.val()},val:function(){return gx.fn.getDecimalValue("vCMATERIAPRIMAQTDE",'.',',')},nac:gx.falseFn};
   GXValidFnc[42]={fld:"TEXTBLOCKMATERIAPRIMAUSUARIOALT", format:0,grid:0};
   GXValidFnc[44]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCMATERIAPRIMAUSUARIOALT",gxz:"ZV12cMateriaPrimaUsuarioAlt",gxold:"OV12cMateriaPrimaUsuarioAlt",gxvar:"AV12cMateriaPrimaUsuarioAlt",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV12cMateriaPrimaUsuarioAlt=Value},v2z:function(Value){gx.O.ZV12cMateriaPrimaUsuarioAlt=Value},v2c:function(){gx.fn.setControlValue("vCMATERIAPRIMAUSUARIOALT",gx.O.AV12cMateriaPrimaUsuarioAlt,0)},c2v:function(){gx.O.AV12cMateriaPrimaUsuarioAlt=this.val()},val:function(){return gx.fn.getControlValue("vCMATERIAPRIMAUSUARIOALT")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"GROUP2",grid:0};
   GXValidFnc[48]={fld:"TABLE3",grid:0};
   GXValidFnc[52]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51),gx.O.AV5LinkSelection,gx.O.AV18Linkselection_GXI)},c2v:function(){gx.O.AV18Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(51))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(51))}, gxvar_GXI:'AV18Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[53]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MATERIAPRIMAPRODFINALEMPID",gxz:"Z5533MateriaPrimaProdFinalEmpId",gxold:"O5533MateriaPrimaProdFinalEmpId",gxvar:"A5533MateriaPrimaProdFinalEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5533MateriaPrimaProdFinalEmpId=Value},v2z:function(Value){gx.O.Z5533MateriaPrimaProdFinalEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("MATERIAPRIMAPRODFINALEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A5533MateriaPrimaProdFinalEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5533MateriaPrimaProdFinalEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("MATERIAPRIMAPRODFINALEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[54]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MATERIAPRIMAPRODFINALID",gxz:"Z5534MateriaPrimaProdFinalId",gxold:"O5534MateriaPrimaProdFinalId",gxvar:"A5534MateriaPrimaProdFinalId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5534MateriaPrimaProdFinalId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5534MateriaPrimaProdFinalId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MATERIAPRIMAPRODFINALID",row || gx.fn.currentGridRowImpl(51),gx.O.A5534MateriaPrimaProdFinalId,0)},c2v:function(){gx.O.A5534MateriaPrimaProdFinalId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MATERIAPRIMAPRODFINALID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MATERIAPRIMASEQ",gxz:"Z5535MateriaPrimaSeq",gxold:"O5535MateriaPrimaSeq",gxvar:"A5535MateriaPrimaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5535MateriaPrimaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5535MateriaPrimaSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MATERIAPRIMASEQ",row || gx.fn.currentGridRowImpl(51),gx.O.A5535MateriaPrimaSeq,0)},c2v:function(){gx.O.A5535MateriaPrimaSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MATERIAPRIMASEQ",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MATERIAPRIMAPRODEMPID",gxz:"Z5527MateriaPrimaProdEmpId",gxold:"O5527MateriaPrimaProdEmpId",gxvar:"A5527MateriaPrimaProdEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A5527MateriaPrimaProdEmpId=Value},v2z:function(Value){gx.O.Z5527MateriaPrimaProdEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("MATERIAPRIMAPRODEMPID",row || gx.fn.currentGridRowImpl(51),gx.O.A5527MateriaPrimaProdEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A5527MateriaPrimaProdEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("MATERIAPRIMAPRODEMPID",row || gx.fn.currentGridRowImpl(51))},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"int",len:10,dec:0,sign:false,pic:"ZZZZZZZZZ9",ro:1,isacc:0,grid:51,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"MATERIAPRIMAPRODID",gxz:"Z5528MateriaPrimaProdId",gxold:"O5528MateriaPrimaProdId",gxvar:"A5528MateriaPrimaProdId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A5528MateriaPrimaProdId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z5528MateriaPrimaProdId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("MATERIAPRIMAPRODID",row || gx.fn.currentGridRowImpl(51),gx.O.A5528MateriaPrimaProdId,0)},c2v:function(){gx.O.A5528MateriaPrimaProdId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("MATERIAPRIMAPRODID",row || gx.fn.currentGridRowImpl(51),'.')},nac:gx.falseFn};
   GXValidFnc[60]={fld:"TABLE4",grid:0};
   this.AV6cMateriaPrimaProdFinalEmpId = "" ;
   this.ZV6cMateriaPrimaProdFinalEmpId = "" ;
   this.OV6cMateriaPrimaProdFinalEmpId = "" ;
   this.AV7cMateriaPrimaProdFinalId = 0 ;
   this.ZV7cMateriaPrimaProdFinalId = 0 ;
   this.OV7cMateriaPrimaProdFinalId = 0 ;
   this.AV8cMateriaPrimaSeq = 0 ;
   this.ZV8cMateriaPrimaSeq = 0 ;
   this.OV8cMateriaPrimaSeq = 0 ;
   this.AV9cMateriaPrimaProdEmpId = "" ;
   this.ZV9cMateriaPrimaProdEmpId = "" ;
   this.OV9cMateriaPrimaProdEmpId = "" ;
   this.AV10cMateriaPrimaProdId = 0 ;
   this.ZV10cMateriaPrimaProdId = 0 ;
   this.OV10cMateriaPrimaProdId = 0 ;
   this.AV11cMateriaPrimaQtde = 0 ;
   this.ZV11cMateriaPrimaQtde = 0 ;
   this.OV11cMateriaPrimaQtde = 0 ;
   this.AV12cMateriaPrimaUsuarioAlt = "" ;
   this.ZV12cMateriaPrimaUsuarioAlt = "" ;
   this.OV12cMateriaPrimaUsuarioAlt = "" ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z5533MateriaPrimaProdFinalEmpId = "" ;
   this.O5533MateriaPrimaProdFinalEmpId = "" ;
   this.Z5534MateriaPrimaProdFinalId = 0 ;
   this.O5534MateriaPrimaProdFinalId = 0 ;
   this.Z5535MateriaPrimaSeq = 0 ;
   this.O5535MateriaPrimaSeq = 0 ;
   this.Z5527MateriaPrimaProdEmpId = "" ;
   this.O5527MateriaPrimaProdEmpId = "" ;
   this.Z5528MateriaPrimaProdId = 0 ;
   this.O5528MateriaPrimaProdId = 0 ;
   this.AV6cMateriaPrimaProdFinalEmpId = "" ;
   this.AV7cMateriaPrimaProdFinalId = 0 ;
   this.AV8cMateriaPrimaSeq = 0 ;
   this.AV9cMateriaPrimaProdEmpId = "" ;
   this.AV10cMateriaPrimaProdId = 0 ;
   this.AV11cMateriaPrimaQtde = 0 ;
   this.AV12cMateriaPrimaUsuarioAlt = "" ;
   this.AV13pMateriaPrimaProdFinalEmpId = "" ;
   this.AV14pMateriaPrimaProdFinalId = 0 ;
   this.AV15pMateriaPrimaSeq = 0 ;
   this.A5531MateriaPrimaUsuarioAlt = "" ;
   this.A5530MateriaPrimaQtde = 0 ;
   this.AV5LinkSelection = "" ;
   this.A5533MateriaPrimaProdFinalEmpId = "" ;
   this.A5534MateriaPrimaProdFinalId = 0 ;
   this.A5535MateriaPrimaSeq = 0 ;
   this.A5527MateriaPrimaProdEmpId = "" ;
   this.A5528MateriaPrimaProdId = 0 ;
   this.Events = {"e131s42_client": ["ENTER", true] ,"e141s41_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMateriaPrimaProdFinalEmpId',fld:'vCMATERIAPRIMAPRODFINALEMPID'},{av:'AV7cMateriaPrimaProdFinalId',fld:'vCMATERIAPRIMAPRODFINALID'},{av:'AV8cMateriaPrimaSeq',fld:'vCMATERIAPRIMASEQ'},{av:'AV9cMateriaPrimaProdEmpId',fld:'vCMATERIAPRIMAPRODEMPID'},{av:'AV10cMateriaPrimaProdId',fld:'vCMATERIAPRIMAPRODID'},{av:'AV11cMateriaPrimaQtde',fld:'vCMATERIAPRIMAQTDE'},{av:'AV12cMateriaPrimaUsuarioAlt',fld:'vCMATERIAPRIMAUSUARIOALT'}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A5533MateriaPrimaProdFinalEmpId',fld:'MATERIAPRIMAPRODFINALEMPID'},{av:'A5534MateriaPrimaProdFinalId',fld:'MATERIAPRIMAPRODFINALID'},{av:'A5535MateriaPrimaSeq',fld:'MATERIAPRIMASEQ'}],[{av:'AV13pMateriaPrimaProdFinalEmpId',fld:'vPMATERIAPRIMAPRODFINALEMPID'},{av:'AV14pMateriaPrimaProdFinalId',fld:'vPMATERIAPRIMAPRODFINALID'},{av:'AV15pMateriaPrimaSeq',fld:'vPMATERIAPRIMASEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMateriaPrimaProdFinalEmpId',fld:'vCMATERIAPRIMAPRODFINALEMPID'},{av:'AV7cMateriaPrimaProdFinalId',fld:'vCMATERIAPRIMAPRODFINALID'},{av:'AV8cMateriaPrimaSeq',fld:'vCMATERIAPRIMASEQ'},{av:'AV9cMateriaPrimaProdEmpId',fld:'vCMATERIAPRIMAPRODEMPID'},{av:'AV10cMateriaPrimaProdId',fld:'vCMATERIAPRIMAPRODID'},{av:'AV11cMateriaPrimaQtde',fld:'vCMATERIAPRIMAQTDE'},{av:'AV12cMateriaPrimaUsuarioAlt',fld:'vCMATERIAPRIMAUSUARIOALT'}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMateriaPrimaProdFinalEmpId',fld:'vCMATERIAPRIMAPRODFINALEMPID'},{av:'AV7cMateriaPrimaProdFinalId',fld:'vCMATERIAPRIMAPRODFINALID'},{av:'AV8cMateriaPrimaSeq',fld:'vCMATERIAPRIMASEQ'},{av:'AV9cMateriaPrimaProdEmpId',fld:'vCMATERIAPRIMAPRODEMPID'},{av:'AV10cMateriaPrimaProdId',fld:'vCMATERIAPRIMAPRODID'},{av:'AV11cMateriaPrimaQtde',fld:'vCMATERIAPRIMAQTDE'},{av:'AV12cMateriaPrimaUsuarioAlt',fld:'vCMATERIAPRIMAUSUARIOALT'}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMateriaPrimaProdFinalEmpId',fld:'vCMATERIAPRIMAPRODFINALEMPID'},{av:'AV7cMateriaPrimaProdFinalId',fld:'vCMATERIAPRIMAPRODFINALID'},{av:'AV8cMateriaPrimaSeq',fld:'vCMATERIAPRIMASEQ'},{av:'AV9cMateriaPrimaProdEmpId',fld:'vCMATERIAPRIMAPRODEMPID'},{av:'AV10cMateriaPrimaProdId',fld:'vCMATERIAPRIMAPRODID'},{av:'AV11cMateriaPrimaQtde',fld:'vCMATERIAPRIMAQTDE'},{av:'AV12cMateriaPrimaUsuarioAlt',fld:'vCMATERIAPRIMAUSUARIOALT'}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cMateriaPrimaProdFinalEmpId',fld:'vCMATERIAPRIMAPRODFINALEMPID'},{av:'AV7cMateriaPrimaProdFinalId',fld:'vCMATERIAPRIMAPRODFINALID'},{av:'AV8cMateriaPrimaSeq',fld:'vCMATERIAPRIMASEQ'},{av:'AV9cMateriaPrimaProdEmpId',fld:'vCMATERIAPRIMAPRODEMPID'},{av:'AV10cMateriaPrimaProdId',fld:'vCMATERIAPRIMAPRODID'},{av:'AV11cMateriaPrimaQtde',fld:'vCMATERIAPRIMAQTDE'},{av:'AV12cMateriaPrimaUsuarioAlt',fld:'vCMATERIAPRIMAUSUARIOALT'}],[]];
   this.setVCMap("AV13pMateriaPrimaProdFinalEmpId", "vPMATERIAPRIMAPRODFINALEMPID", 0, "char");
   this.setVCMap("AV14pMateriaPrimaProdFinalId", "vPMATERIAPRIMAPRODFINALID", 0, "int");
   this.setVCMap("AV15pMateriaPrimaSeq", "vPMATERIAPRIMASEQ", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[39]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[44]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0d70());