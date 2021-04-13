/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 20:45:32.96
*/
gx.evt.autoSkip = false;
gx.define('gx0l52', false, function () {
   this.ServerClass =  "gx0l52" ;
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
      this.AV11pContaProvisoriaFRMEmpId=gx.fn.getControlValue("vPCONTAPROVISORIAFRMEMPID") ;
      this.AV12pContaProvisoriaFRMNoReserva=gx.fn.getIntegerValue("vPCONTAPROVISORIAFRMNORESERVA",'.') ;
      this.AV13pContaProvisoriaFRMContaSeq=gx.fn.getIntegerValue("vPCONTAPROVISORIAFRMCONTASEQ",'.') ;
   };
   this.e1325s2_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e1425s1_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,9,12,14,17,19,22,24,27,29,32,34,37,38,42,43,44,45,46,47,50];
   this.GXLastCtrlId =50;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",41,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx0l52",[],false,1,false,true,10,true,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addBitmap("&Linkselection","vLINKSELECTION",42,0,"px",17,"px",null,"","","Image","");
   Grid1Container.addSingleLineEdit(10140,43,"CONTAPROVISORIAFRMCONTASEQ","Conta Provisoria FRMConta Seq","","ContaProvisoriaFRMContaSeq","int",0,"px",8,8,"right",null,[],10140,"ContaProvisoriaFRMContaSeq",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10143,44,"CONTAPROVISORIAFRMCONTAPRECEMP","Conta Provisoria FRMConta PRec Emp","","ContaProvisoriaFRMContaPRecEmp","char",0,"px",10,10,"left",null,[],10143,"ContaProvisoriaFRMContaPRecEmp",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10144,45,"CONTAPROVISORIAFRMCONTAPRECNO","Conta Provisoria FRMConta PRec No","","ContaProvisoriaFRMContaPRecNo","int",0,"px",8,8,"right",null,[],10144,"ContaProvisoriaFRMContaPRecNo",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10138,46,"CONTAPROVISORIAFRMEMPID","Conta Provisoria FRMEmp Id","","ContaProvisoriaFRMEmpId","char",0,"px",10,10,"left",null,[],10138,"ContaProvisoriaFRMEmpId",false,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(10139,47,"CONTAPROVISORIAFRMNORESERVA","Conta Provisoria FRMNo Reserva","","ContaProvisoriaFRMNoReserva","int",0,"px",8,8,"right",null,[],10139,"ContaProvisoriaFRMNoReserva",false,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"GROUP1",grid:0};
   GXValidFnc[9]={fld:"TABLE2",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCKCONTAPROVISORIAFRMCONTASEQ", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTAPROVISORIAFRMCONTASEQ",gxz:"ZV6cContaProvisoriaFRMContaSeq",gxold:"OV6cContaProvisoriaFRMContaSeq",gxvar:"AV6cContaProvisoriaFRMContaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cContaProvisoriaFRMContaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cContaProvisoriaFRMContaSeq=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCONTAPROVISORIAFRMCONTASEQ",gx.O.AV6cContaProvisoriaFRMContaSeq,0)},c2v:function(){gx.O.AV6cContaProvisoriaFRMContaSeq=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCONTAPROVISORIAFRMCONTASEQ",'.')},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCKCONTAPROVISORIAFRMCONTAPRECEMP", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTAPROVISORIAFRMCONTAPRECEMP",gxz:"ZV7cContaProvisoriaFRMContaPRecEmp",gxold:"OV7cContaProvisoriaFRMContaPRecEmp",gxvar:"AV7cContaProvisoriaFRMContaPRecEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cContaProvisoriaFRMContaPRecEmp=Value},v2z:function(Value){gx.O.ZV7cContaProvisoriaFRMContaPRecEmp=Value},v2c:function(){gx.fn.setControlValue("vCCONTAPROVISORIAFRMCONTAPRECEMP",gx.O.AV7cContaProvisoriaFRMContaPRecEmp,0)},c2v:function(){gx.O.AV7cContaProvisoriaFRMContaPRecEmp=this.val()},val:function(){return gx.fn.getControlValue("vCCONTAPROVISORIAFRMCONTAPRECEMP")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCKCONTAPROVISORIAFRMCONTAPRECNO", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTAPROVISORIAFRMCONTAPRECNO",gxz:"ZV8cContaProvisoriaFRMContaPRecNo",gxold:"OV8cContaProvisoriaFRMContaPRecNo",gxvar:"AV8cContaProvisoriaFRMContaPRecNo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV8cContaProvisoriaFRMContaPRecNo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV8cContaProvisoriaFRMContaPRecNo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCONTAPROVISORIAFRMCONTAPRECNO",gx.O.AV8cContaProvisoriaFRMContaPRecNo,0)},c2v:function(){gx.O.AV8cContaProvisoriaFRMContaPRecNo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCONTAPROVISORIAFRMCONTAPRECNO",'.')},nac:gx.falseFn};
   GXValidFnc[27]={fld:"TEXTBLOCKCONTAPROVISORIAFRMCONTALANEMP", format:0,grid:0};
   GXValidFnc[29]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTAPROVISORIAFRMCONTALANEMP",gxz:"ZV9cContaProvisoriaFRMContaLanEmp",gxold:"OV9cContaProvisoriaFRMContaLanEmp",gxvar:"AV9cContaProvisoriaFRMContaLanEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV9cContaProvisoriaFRMContaLanEmp=Value},v2z:function(Value){gx.O.ZV9cContaProvisoriaFRMContaLanEmp=Value},v2c:function(){gx.fn.setControlValue("vCCONTAPROVISORIAFRMCONTALANEMP",gx.O.AV9cContaProvisoriaFRMContaLanEmp,0)},c2v:function(){gx.O.AV9cContaProvisoriaFRMContaLanEmp=this.val()},val:function(){return gx.fn.getControlValue("vCCONTAPROVISORIAFRMCONTALANEMP")},nac:gx.falseFn};
   GXValidFnc[32]={fld:"TEXTBLOCKCONTAPROVISORIAFRMCONTALANNO", format:0,grid:0};
   GXValidFnc[34]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCCONTAPROVISORIAFRMCONTALANNO",gxz:"ZV10cContaProvisoriaFRMContaLanNo",gxold:"OV10cContaProvisoriaFRMContaLanNo",gxvar:"AV10cContaProvisoriaFRMContaLanNo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cContaProvisoriaFRMContaLanNo=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV10cContaProvisoriaFRMContaLanNo=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCCONTAPROVISORIAFRMCONTALANNO",gx.O.AV10cContaProvisoriaFRMContaLanNo,0)},c2v:function(){gx.O.AV10cContaProvisoriaFRMContaLanNo=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCCONTAPROVISORIAFRMCONTALANNO",'.')},nac:gx.falseFn};
   GXValidFnc[37]={fld:"GROUP2",grid:0};
   GXValidFnc[38]={fld:"TABLE3",grid:0};
   GXValidFnc[42]={lvl:2,type:"bits",len:1024,dec:0,sign:false,ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"vLINKSELECTION",gxz:"ZV5LinkSelection",gxold:"OV5LinkSelection",gxvar:"AV5LinkSelection",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.AV5LinkSelection=Value},v2z:function(Value){gx.O.ZV5LinkSelection=Value},v2c:function(row){gx.fn.setGridMultimediaValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41),gx.O.AV5LinkSelection,gx.O.AV16Linkselection_GXI)},c2v:function(){gx.O.AV16Linkselection_GXI=this.val_GXI();gx.O.AV5LinkSelection=this.val()},val:function(row){return gx.fn.getGridControlValue("vLINKSELECTION",row || gx.fn.currentGridRowImpl(41))},val_GXI:function(row){return gx.fn.getGridControlValue("vLINKSELECTION_GXI",row || gx.fn.currentGridRowImpl(41))}, gxvar_GXI:'AV16Linkselection_GXI',nac:gx.falseFn};
   GXValidFnc[43]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMCONTASEQ",gxz:"Z10140ContaProvisoriaFRMContaSeq",gxold:"O10140ContaProvisoriaFRMContaSeq",gxvar:"A10140ContaProvisoriaFRMContaSeq",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10140ContaProvisoriaFRMContaSeq=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10140ContaProvisoriaFRMContaSeq=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMCONTASEQ",row || gx.fn.currentGridRowImpl(41),gx.O.A10140ContaProvisoriaFRMContaSeq,0)},c2v:function(){gx.O.A10140ContaProvisoriaFRMContaSeq=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPROVISORIAFRMCONTASEQ",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[44]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMCONTAPRECEMP",gxz:"Z10143ContaProvisoriaFRMContaPRecEmp",gxold:"O10143ContaProvisoriaFRMContaPRecEmp",gxvar:"A10143ContaProvisoriaFRMContaPRecEmp",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10143ContaProvisoriaFRMContaPRecEmp=Value},v2z:function(Value){gx.O.Z10143ContaProvisoriaFRMContaPRecEmp=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMCONTAPRECEMP",row || gx.fn.currentGridRowImpl(41),gx.O.A10143ContaProvisoriaFRMContaPRecEmp,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10143ContaProvisoriaFRMContaPRecEmp=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPROVISORIAFRMCONTAPRECEMP",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[45]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMCONTAPRECNO",gxz:"Z10144ContaProvisoriaFRMContaPRecNo",gxold:"O10144ContaProvisoriaFRMContaPRecNo",gxvar:"A10144ContaProvisoriaFRMContaPRecNo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10144ContaProvisoriaFRMContaPRecNo=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10144ContaProvisoriaFRMContaPRecNo=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMCONTAPRECNO",row || gx.fn.currentGridRowImpl(41),gx.O.A10144ContaProvisoriaFRMContaPRecNo,0)},c2v:function(){gx.O.A10144ContaProvisoriaFRMContaPRecNo=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPROVISORIAFRMCONTAPRECNO",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[46]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMEMPID",gxz:"Z10138ContaProvisoriaFRMEmpId",gxold:"O10138ContaProvisoriaFRMEmpId",gxvar:"A10138ContaProvisoriaFRMEmpId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A10138ContaProvisoriaFRMEmpId=Value},v2z:function(Value){gx.O.Z10138ContaProvisoriaFRMEmpId=Value},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMEMPID",row || gx.fn.currentGridRowImpl(41),gx.O.A10138ContaProvisoriaFRMEmpId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A10138ContaProvisoriaFRMEmpId=this.val()},val:function(row){return gx.fn.getGridControlValue("CONTAPROVISORIAFRMEMPID",row || gx.fn.currentGridRowImpl(41))},nac:gx.falseFn};
   GXValidFnc[47]={lvl:2,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,isacc:0,grid:41,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"CONTAPROVISORIAFRMNORESERVA",gxz:"Z10139ContaProvisoriaFRMNoReserva",gxold:"O10139ContaProvisoriaFRMNoReserva",gxvar:"A10139ContaProvisoriaFRMNoReserva",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A10139ContaProvisoriaFRMNoReserva=gx.num.intval(Value)},v2z:function(Value){gx.O.Z10139ContaProvisoriaFRMNoReserva=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("CONTAPROVISORIAFRMNORESERVA",row || gx.fn.currentGridRowImpl(41),gx.O.A10139ContaProvisoriaFRMNoReserva,0)},c2v:function(){gx.O.A10139ContaProvisoriaFRMNoReserva=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("CONTAPROVISORIAFRMNORESERVA",row || gx.fn.currentGridRowImpl(41),'.')},nac:gx.falseFn};
   GXValidFnc[50]={fld:"TABLE4",grid:0};
   this.AV6cContaProvisoriaFRMContaSeq = 0 ;
   this.ZV6cContaProvisoriaFRMContaSeq = 0 ;
   this.OV6cContaProvisoriaFRMContaSeq = 0 ;
   this.AV7cContaProvisoriaFRMContaPRecEmp = "" ;
   this.ZV7cContaProvisoriaFRMContaPRecEmp = "" ;
   this.OV7cContaProvisoriaFRMContaPRecEmp = "" ;
   this.AV8cContaProvisoriaFRMContaPRecNo = 0 ;
   this.ZV8cContaProvisoriaFRMContaPRecNo = 0 ;
   this.OV8cContaProvisoriaFRMContaPRecNo = 0 ;
   this.AV9cContaProvisoriaFRMContaLanEmp = "" ;
   this.ZV9cContaProvisoriaFRMContaLanEmp = "" ;
   this.OV9cContaProvisoriaFRMContaLanEmp = "" ;
   this.AV10cContaProvisoriaFRMContaLanNo = 0 ;
   this.ZV10cContaProvisoriaFRMContaLanNo = 0 ;
   this.OV10cContaProvisoriaFRMContaLanNo = 0 ;
   this.ZV5LinkSelection = "" ;
   this.OV5LinkSelection = "" ;
   this.Z10140ContaProvisoriaFRMContaSeq = 0 ;
   this.O10140ContaProvisoriaFRMContaSeq = 0 ;
   this.Z10143ContaProvisoriaFRMContaPRecEmp = "" ;
   this.O10143ContaProvisoriaFRMContaPRecEmp = "" ;
   this.Z10144ContaProvisoriaFRMContaPRecNo = 0 ;
   this.O10144ContaProvisoriaFRMContaPRecNo = 0 ;
   this.Z10138ContaProvisoriaFRMEmpId = "" ;
   this.O10138ContaProvisoriaFRMEmpId = "" ;
   this.Z10139ContaProvisoriaFRMNoReserva = 0 ;
   this.O10139ContaProvisoriaFRMNoReserva = 0 ;
   this.AV6cContaProvisoriaFRMContaSeq = 0 ;
   this.AV7cContaProvisoriaFRMContaPRecEmp = "" ;
   this.AV8cContaProvisoriaFRMContaPRecNo = 0 ;
   this.AV9cContaProvisoriaFRMContaLanEmp = "" ;
   this.AV10cContaProvisoriaFRMContaLanNo = 0 ;
   this.AV11pContaProvisoriaFRMEmpId = "" ;
   this.AV12pContaProvisoriaFRMNoReserva = 0 ;
   this.AV13pContaProvisoriaFRMContaSeq = 0 ;
   this.A10142ContaProvisoriaFRMContaLanNo = 0 ;
   this.A10141ContaProvisoriaFRMContaLanEmp = "" ;
   this.AV5LinkSelection = "" ;
   this.A10140ContaProvisoriaFRMContaSeq = 0 ;
   this.A10143ContaProvisoriaFRMContaPRecEmp = "" ;
   this.A10144ContaProvisoriaFRMContaPRecNo = 0 ;
   this.A10138ContaProvisoriaFRMEmpId = "" ;
   this.A10139ContaProvisoriaFRMNoReserva = 0 ;
   this.Events = {"e1325s2_client": ["ENTER", true] ,"e1425s1_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaProvisoriaFRMContaSeq',fld:'vCCONTAPROVISORIAFRMCONTASEQ'},{av:'AV7cContaProvisoriaFRMContaPRecEmp',fld:'vCCONTAPROVISORIAFRMCONTAPRECEMP'},{av:'AV8cContaProvisoriaFRMContaPRecNo',fld:'vCCONTAPROVISORIAFRMCONTAPRECNO'},{av:'AV9cContaProvisoriaFRMContaLanEmp',fld:'vCCONTAPROVISORIAFRMCONTALANEMP'},{av:'AV10cContaProvisoriaFRMContaLanNo',fld:'vCCONTAPROVISORIAFRMCONTALANNO'},{av:'AV11pContaProvisoriaFRMEmpId',fld:'vPCONTAPROVISORIAFRMEMPID',hsh:true},{av:'AV12pContaProvisoriaFRMNoReserva',fld:'vPCONTAPROVISORIAFRMNORESERVA',hsh:true}],[]];
   this.EvtParms["LOAD"] = [[],[{av:'AV5LinkSelection',fld:'vLINKSELECTION'}]];
   this.EvtParms["ENTER"] = [[{av:'A10140ContaProvisoriaFRMContaSeq',fld:'CONTAPROVISORIAFRMCONTASEQ'}],[{av:'AV13pContaProvisoriaFRMContaSeq',fld:'vPCONTAPROVISORIAFRMCONTASEQ'}]];
   this.EvtParms["GRID1_FIRSTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaProvisoriaFRMContaSeq',fld:'vCCONTAPROVISORIAFRMCONTASEQ'},{av:'AV7cContaProvisoriaFRMContaPRecEmp',fld:'vCCONTAPROVISORIAFRMCONTAPRECEMP'},{av:'AV8cContaProvisoriaFRMContaPRecNo',fld:'vCCONTAPROVISORIAFRMCONTAPRECNO'},{av:'AV9cContaProvisoriaFRMContaLanEmp',fld:'vCCONTAPROVISORIAFRMCONTALANEMP'},{av:'AV10cContaProvisoriaFRMContaLanNo',fld:'vCCONTAPROVISORIAFRMCONTALANNO'},{av:'AV11pContaProvisoriaFRMEmpId',fld:'vPCONTAPROVISORIAFRMEMPID',hsh:true},{av:'AV12pContaProvisoriaFRMNoReserva',fld:'vPCONTAPROVISORIAFRMNORESERVA',hsh:true}],[]];
   this.EvtParms["GRID1_PREVPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaProvisoriaFRMContaSeq',fld:'vCCONTAPROVISORIAFRMCONTASEQ'},{av:'AV7cContaProvisoriaFRMContaPRecEmp',fld:'vCCONTAPROVISORIAFRMCONTAPRECEMP'},{av:'AV8cContaProvisoriaFRMContaPRecNo',fld:'vCCONTAPROVISORIAFRMCONTAPRECNO'},{av:'AV9cContaProvisoriaFRMContaLanEmp',fld:'vCCONTAPROVISORIAFRMCONTALANEMP'},{av:'AV10cContaProvisoriaFRMContaLanNo',fld:'vCCONTAPROVISORIAFRMCONTALANNO'},{av:'AV11pContaProvisoriaFRMEmpId',fld:'vPCONTAPROVISORIAFRMEMPID',hsh:true},{av:'AV12pContaProvisoriaFRMNoReserva',fld:'vPCONTAPROVISORIAFRMNORESERVA',hsh:true}],[]];
   this.EvtParms["GRID1_NEXTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaProvisoriaFRMContaSeq',fld:'vCCONTAPROVISORIAFRMCONTASEQ'},{av:'AV7cContaProvisoriaFRMContaPRecEmp',fld:'vCCONTAPROVISORIAFRMCONTAPRECEMP'},{av:'AV8cContaProvisoriaFRMContaPRecNo',fld:'vCCONTAPROVISORIAFRMCONTAPRECNO'},{av:'AV9cContaProvisoriaFRMContaLanEmp',fld:'vCCONTAPROVISORIAFRMCONTALANEMP'},{av:'AV10cContaProvisoriaFRMContaLanNo',fld:'vCCONTAPROVISORIAFRMCONTALANNO'},{av:'AV11pContaProvisoriaFRMEmpId',fld:'vPCONTAPROVISORIAFRMEMPID',hsh:true},{av:'AV12pContaProvisoriaFRMNoReserva',fld:'vPCONTAPROVISORIAFRMNORESERVA',hsh:true}],[]];
   this.EvtParms["GRID1_LASTPAGE"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV6cContaProvisoriaFRMContaSeq',fld:'vCCONTAPROVISORIAFRMCONTASEQ'},{av:'AV7cContaProvisoriaFRMContaPRecEmp',fld:'vCCONTAPROVISORIAFRMCONTAPRECEMP'},{av:'AV8cContaProvisoriaFRMContaPRecNo',fld:'vCCONTAPROVISORIAFRMCONTAPRECNO'},{av:'AV9cContaProvisoriaFRMContaLanEmp',fld:'vCCONTAPROVISORIAFRMCONTALANEMP'},{av:'AV10cContaProvisoriaFRMContaLanNo',fld:'vCCONTAPROVISORIAFRMCONTALANNO'},{av:'AV11pContaProvisoriaFRMEmpId',fld:'vPCONTAPROVISORIAFRMEMPID',hsh:true},{av:'AV12pContaProvisoriaFRMNoReserva',fld:'vPCONTAPROVISORIAFRMNORESERVA',hsh:true}],[]];
   this.setVCMap("AV11pContaProvisoriaFRMEmpId", "vPCONTAPROVISORIAFRMEMPID", 0, "char");
   this.setVCMap("AV12pContaProvisoriaFRMNoReserva", "vPCONTAPROVISORIAFRMNORESERVA", 0, "int");
   this.setVCMap("AV13pContaProvisoriaFRMContaSeq", "vPCONTAPROVISORIAFRMCONTASEQ", 0, "int");
   this.setVCMap("AV11pContaProvisoriaFRMEmpId", "vPCONTAPROVISORIAFRMEMPID", 0, "char");
   this.setVCMap("AV12pContaProvisoriaFRMNoReserva", "vPCONTAPROVISORIAFRMNORESERVA", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[14]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[24]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[29]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[34]);
   Grid1Container.addRefreshingVar({rfrVar:"AV11pContaProvisoriaFRMEmpId"});
   Grid1Container.addRefreshingVar({rfrVar:"AV12pContaProvisoriaFRMNoReserva"});
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx0l52());