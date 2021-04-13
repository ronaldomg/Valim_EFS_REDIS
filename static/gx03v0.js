/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 11:57:44.56
*/
gx.evt.autoSkip = false;
gx.define('gx03v0', false, function () {
   this.ServerClass =  "gx03v0" ;
   this.PackageName =  "" ;
   this.setObjectType("web");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.AV12pTipoLancamentoEmpresaid=gx.fn.getControlValue("vPTIPOLANCAMENTOEMPRESAID") ;
      this.AV13pTipoLancamentoId=gx.fn.getIntegerValue("vPTIPOLANCAMENTOID",'.') ;
   };
   this.Validv_Ctipolancamentosnestorno=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("vCTIPOLANCAMENTOSNESTORNO");
         this.AnyError  = 0;
         if ( ! ( this.AV10cTipoLancamentoSnEstorno == "N" || this.AV10cTipoLancamentoSnEstorno == "S" || (""==this.AV10cTipoLancamentoSnEstorno) ) )
         {
            try {
               gxballoon.setError("Campo cTipoLancamentoSnEstorno fora do intervalo");
               this.AnyError = gx.num.trunc( 1 ,0) ;
            }
            catch(e){}
         }

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.e15792_client=function()
   {
      this.executeServerEvent("ENTER", true, arguments[0], false, false);
   };
   this.e11792_client=function()
   {
      this.executeServerEvent("'GXM_FIRST'", false, null, false, false);
   };
   this.e12792_client=function()
   {
      this.executeServerEvent("'GXM_PREVIOUS'", false, null, false, false);
   };
   this.e13792_client=function()
   {
      this.executeServerEvent("'GXM_NEXT'", false, null, false, false);
   };
   this.e14792_client=function()
   {
      this.executeServerEvent("'GXM_LAST'", false, null, false, false);
   };
   this.e17791_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[2,8,11,13,17,19,23,25,29,31,35,37,41,43,47,49,55,56,57];
   this.GXLastCtrlId =57;
   this.Grid1Container = new gx.grid.grid(this, 2,"WbpLvl2",54,"Grid1","Grid1","Grid1Container",this.CmpContext,this.IsMasterPage,"gx03v0",[],false,1,false,true,10,false,false,false,"",0,"px","Novo registro",true,false,false,null,null,false,"",false,[1,1,1,1]);
   var Grid1Container = this.Grid1Container;
   Grid1Container.addSingleLineEdit(1046,55,"TIPOLANCAMENTOEMPRESAID","Empresa da Tarifa","","TipoLancamentoEmpresaid","char",0,"px",10,10,"left",null,[],1046,"TipoLancamentoEmpresaid",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(962,56,"TIPOLANCAMENTOID","Código da Tarifa","","TipoLancamentoId","int",0,"px",4,4,"right",null,[],962,"TipoLancamentoId",true,0,false,false,"Attribute",1,"");
   Grid1Container.addSingleLineEdit(963,57,"TIPOLANCAMENTODESCRICAO","Descrição do Tipo de Lançamento","","TipoLancamentoDescricao","svchar",0,"px",25,25,"left",null,[],963,"TipoLancamentoDescricao",true,0,false,false,"Attribute",1,"");
   this.setGrid(Grid1Container);
   GXValidFnc[2]={fld:"TABLE1",grid:0};
   GXValidFnc[8]={fld:"TABLE2",grid:0};
   GXValidFnc[11]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[13]={lvl:0,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLANCAMENTOEMPRESAID",gxz:"ZV5cTipoLancamentoEmpresaid",gxold:"OV5cTipoLancamentoEmpresaid",gxvar:"AV5cTipoLancamentoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV5cTipoLancamentoEmpresaid=Value},v2z:function(Value){gx.O.ZV5cTipoLancamentoEmpresaid=Value},v2c:function(){gx.fn.setControlValue("vCTIPOLANCAMENTOEMPRESAID",gx.O.AV5cTipoLancamentoEmpresaid,0)},c2v:function(){gx.O.AV5cTipoLancamentoEmpresaid=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLANCAMENTOEMPRESAID")},nac:gx.falseFn};
   GXValidFnc[17]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLANCAMENTOID",gxz:"ZV6cTipoLancamentoId",gxold:"OV6cTipoLancamentoId",gxvar:"AV6cTipoLancamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV6cTipoLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV6cTipoLancamentoId=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vCTIPOLANCAMENTOID",gx.O.AV6cTipoLancamentoId,0)},c2v:function(){gx.O.AV6cTipoLancamentoId=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vCTIPOLANCAMENTOID",'.')},nac:gx.falseFn};
   GXValidFnc[23]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[25]={lvl:0,type:"svchar",len:25,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLANCAMENTODESCRICAO",gxz:"ZV7cTipoLancamentoDescricao",gxold:"OV7cTipoLancamentoDescricao",gxvar:"AV7cTipoLancamentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV7cTipoLancamentoDescricao=Value},v2z:function(Value){gx.O.ZV7cTipoLancamentoDescricao=Value},v2c:function(){gx.fn.setControlValue("vCTIPOLANCAMENTODESCRICAO",gx.O.AV7cTipoLancamentoDescricao,0)},c2v:function(){gx.O.AV7cTipoLancamentoDescricao=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLANCAMENTODESCRICAO")},nac:gx.falseFn};
   GXValidFnc[29]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[31]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLANCAMENTOPAGREC",gxz:"ZV8cTipoLancamentoPagRec",gxold:"OV8cTipoLancamentoPagRec",gxvar:"AV8cTipoLancamentoPagRec",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV8cTipoLancamentoPagRec=Value},v2z:function(Value){gx.O.ZV8cTipoLancamentoPagRec=Value},v2c:function(){gx.fn.setComboBoxValue("vCTIPOLANCAMENTOPAGREC",gx.O.AV8cTipoLancamentoPagRec)},c2v:function(){gx.O.AV8cTipoLancamentoPagRec=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLANCAMENTOPAGREC")},nac:gx.falseFn};
   GXValidFnc[35]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[37]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLANCAMENTOTIPO",gxz:"ZV9cTipoLancamentoTipo",gxold:"OV9cTipoLancamentoTipo",gxvar:"AV9cTipoLancamentoTipo",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV9cTipoLancamentoTipo=Value},v2z:function(Value){gx.O.ZV9cTipoLancamentoTipo=Value},v2c:function(){gx.fn.setComboBoxValue("vCTIPOLANCAMENTOTIPO",gx.O.AV9cTipoLancamentoTipo)},c2v:function(){gx.O.AV9cTipoLancamentoTipo=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLANCAMENTOTIPO")},nac:gx.falseFn};
   GXValidFnc[41]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[43]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Validv_Ctipolancamentosnestorno,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLANCAMENTOSNESTORNO",gxz:"ZV10cTipoLancamentoSnEstorno",gxold:"OV10cTipoLancamentoSnEstorno",gxvar:"AV10cTipoLancamentoSnEstorno",ucs:[],op:[43],ip:[43],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV10cTipoLancamentoSnEstorno=Value},v2z:function(Value){gx.O.ZV10cTipoLancamentoSnEstorno=Value},v2c:function(){gx.fn.setControlValue("vCTIPOLANCAMENTOSNESTORNO",gx.O.AV10cTipoLancamentoSnEstorno,0)},c2v:function(){gx.O.AV10cTipoLancamentoSnEstorno=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLANCAMENTOSNESTORNO")},nac:gx.falseFn};
   GXValidFnc[47]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[49]={lvl:0,type:"char",len:1,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[this.Grid1Container],fld:"vCTIPOLANCAMENTOTPCALCACR",gxz:"ZV11cTipoLancamentoTpCalcAcr",gxold:"OV11cTipoLancamentoTpCalcAcr",gxvar:"AV11cTipoLancamentoTpCalcAcr",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"combo",v2v:function(Value){gx.O.AV11cTipoLancamentoTpCalcAcr=Value},v2z:function(Value){gx.O.ZV11cTipoLancamentoTpCalcAcr=Value},v2c:function(){gx.fn.setComboBoxValue("vCTIPOLANCAMENTOTPCALCACR",gx.O.AV11cTipoLancamentoTpCalcAcr)},c2v:function(){gx.O.AV11cTipoLancamentoTpCalcAcr=this.val()},val:function(){return gx.fn.getControlValue("vCTIPOLANCAMENTOTPCALCACR")},nac:gx.falseFn};
   GXValidFnc[55]={lvl:2,type:"char",len:10,dec:0,sign:false,pic:"@!",ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOEMPRESAID",gxz:"Z1046TipoLancamentoEmpresaid",gxold:"O1046TipoLancamentoEmpresaid",gxvar:"A1046TipoLancamentoEmpresaid",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A1046TipoLancamentoEmpresaid=Value},v2z:function(Value){gx.O.Z1046TipoLancamentoEmpresaid=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLANCAMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(54),gx.O.A1046TipoLancamentoEmpresaid,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A1046TipoLancamentoEmpresaid=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLANCAMENTOEMPRESAID",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   GXValidFnc[56]={lvl:2,type:"int",len:4,dec:0,sign:false,pic:"ZZZ9",ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTOID",gxz:"Z962TipoLancamentoId",gxold:"O962TipoLancamentoId",gxvar:"A962TipoLancamentoId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',v2v:function(Value){gx.O.A962TipoLancamentoId=gx.num.intval(Value)},v2z:function(Value){gx.O.Z962TipoLancamentoId=gx.num.intval(Value)},v2c:function(row){gx.fn.setGridControlValue("TIPOLANCAMENTOID",row || gx.fn.currentGridRowImpl(54),gx.O.A962TipoLancamentoId,0)},c2v:function(){gx.O.A962TipoLancamentoId=gx.num.intval(this.val())},val:function(row){return gx.fn.getGridIntegerValue("TIPOLANCAMENTOID",row || gx.fn.currentGridRowImpl(54),'.')},nac:gx.falseFn};
   GXValidFnc[57]={lvl:2,type:"svchar",len:25,dec:0,sign:false,ro:1,isacc:0,grid:54,gxgrid:this.Grid1Container,fnc:null,isvalid:null,rgrid:[],fld:"TIPOLANCAMENTODESCRICAO",gxz:"Z963TipoLancamentoDescricao",gxold:"O963TipoLancamentoDescricao",gxvar:"A963TipoLancamentoDescricao",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",inputType:'text',autoCorrect:"1",v2v:function(Value){gx.O.A963TipoLancamentoDescricao=Value},v2z:function(Value){gx.O.Z963TipoLancamentoDescricao=Value},v2c:function(row){gx.fn.setGridControlValue("TIPOLANCAMENTODESCRICAO",row || gx.fn.currentGridRowImpl(54),gx.O.A963TipoLancamentoDescricao,0)},c2v:function(){gx.O.A963TipoLancamentoDescricao=this.val()},val:function(row){return gx.fn.getGridControlValue("TIPOLANCAMENTODESCRICAO",row || gx.fn.currentGridRowImpl(54))},nac:gx.falseFn};
   this.AV5cTipoLancamentoEmpresaid = "" ;
   this.ZV5cTipoLancamentoEmpresaid = "" ;
   this.OV5cTipoLancamentoEmpresaid = "" ;
   this.AV6cTipoLancamentoId = 0 ;
   this.ZV6cTipoLancamentoId = 0 ;
   this.OV6cTipoLancamentoId = 0 ;
   this.AV7cTipoLancamentoDescricao = "" ;
   this.ZV7cTipoLancamentoDescricao = "" ;
   this.OV7cTipoLancamentoDescricao = "" ;
   this.AV8cTipoLancamentoPagRec = "" ;
   this.ZV8cTipoLancamentoPagRec = "" ;
   this.OV8cTipoLancamentoPagRec = "" ;
   this.AV9cTipoLancamentoTipo = "" ;
   this.ZV9cTipoLancamentoTipo = "" ;
   this.OV9cTipoLancamentoTipo = "" ;
   this.AV10cTipoLancamentoSnEstorno = "" ;
   this.ZV10cTipoLancamentoSnEstorno = "" ;
   this.OV10cTipoLancamentoSnEstorno = "" ;
   this.AV11cTipoLancamentoTpCalcAcr = "" ;
   this.ZV11cTipoLancamentoTpCalcAcr = "" ;
   this.OV11cTipoLancamentoTpCalcAcr = "" ;
   this.Z1046TipoLancamentoEmpresaid = "" ;
   this.O1046TipoLancamentoEmpresaid = "" ;
   this.Z962TipoLancamentoId = 0 ;
   this.O962TipoLancamentoId = 0 ;
   this.Z963TipoLancamentoDescricao = "" ;
   this.O963TipoLancamentoDescricao = "" ;
   this.AV5cTipoLancamentoEmpresaid = "" ;
   this.AV6cTipoLancamentoId = 0 ;
   this.AV7cTipoLancamentoDescricao = "" ;
   this.AV8cTipoLancamentoPagRec = "" ;
   this.AV9cTipoLancamentoTipo = "" ;
   this.AV10cTipoLancamentoSnEstorno = "" ;
   this.AV11cTipoLancamentoTpCalcAcr = "" ;
   this.AV12pTipoLancamentoEmpresaid = "" ;
   this.AV13pTipoLancamentoId = 0 ;
   this.A964TipoLancamentoPagRec = "" ;
   this.A965TipoLancamentoTipo = "" ;
   this.A966TipoLancamentoSnEstorno = "" ;
   this.A967TipoLancamentoTpCalcAcr = "" ;
   this.A1046TipoLancamentoEmpresaid = "" ;
   this.A962TipoLancamentoId = 0 ;
   this.A963TipoLancamentoDescricao = "" ;
   this.Events = {"e15792_client": ["ENTER", true] ,"e11792_client": ["'GXM_FIRST'", true] ,"e12792_client": ["'GXM_PREVIOUS'", true] ,"e13792_client": ["'GXM_NEXT'", true] ,"e14792_client": ["'GXM_LAST'", true] ,"e17791_client": ["CANCEL", true]};
   this.EvtParms["REFRESH"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cTipoLancamentoEmpresaid',fld:'vCTIPOLANCAMENTOEMPRESAID'},{av:'AV6cTipoLancamentoId',fld:'vCTIPOLANCAMENTOID'},{av:'AV7cTipoLancamentoDescricao',fld:'vCTIPOLANCAMENTODESCRICAO'},{av:'AV8cTipoLancamentoPagRec',fld:'vCTIPOLANCAMENTOPAGREC'},{av:'AV9cTipoLancamentoTipo',fld:'vCTIPOLANCAMENTOTIPO'},{av:'AV10cTipoLancamentoSnEstorno',fld:'vCTIPOLANCAMENTOSNESTORNO'},{av:'AV11cTipoLancamentoTpCalcAcr',fld:'vCTIPOLANCAMENTOTPCALCACR'}],[]];
   this.EvtParms["ENTER"] = [[{av:'A1046TipoLancamentoEmpresaid',fld:'TIPOLANCAMENTOEMPRESAID'},{av:'A962TipoLancamentoId',fld:'TIPOLANCAMENTOID'}],[{av:'AV12pTipoLancamentoEmpresaid',fld:'vPTIPOLANCAMENTOEMPRESAID'},{av:'AV13pTipoLancamentoId',fld:'vPTIPOLANCAMENTOID'}]];
   this.EvtParms["'GXM_FIRST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cTipoLancamentoEmpresaid',fld:'vCTIPOLANCAMENTOEMPRESAID'},{av:'AV6cTipoLancamentoId',fld:'vCTIPOLANCAMENTOID'},{av:'AV7cTipoLancamentoDescricao',fld:'vCTIPOLANCAMENTODESCRICAO'},{av:'AV8cTipoLancamentoPagRec',fld:'vCTIPOLANCAMENTOPAGREC'},{av:'AV9cTipoLancamentoTipo',fld:'vCTIPOLANCAMENTOTIPO'},{av:'AV10cTipoLancamentoSnEstorno',fld:'vCTIPOLANCAMENTOSNESTORNO'},{av:'AV11cTipoLancamentoTpCalcAcr',fld:'vCTIPOLANCAMENTOTPCALCACR'}],[]];
   this.EvtParms["'GXM_PREVIOUS'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cTipoLancamentoEmpresaid',fld:'vCTIPOLANCAMENTOEMPRESAID'},{av:'AV6cTipoLancamentoId',fld:'vCTIPOLANCAMENTOID'},{av:'AV7cTipoLancamentoDescricao',fld:'vCTIPOLANCAMENTODESCRICAO'},{av:'AV8cTipoLancamentoPagRec',fld:'vCTIPOLANCAMENTOPAGREC'},{av:'AV9cTipoLancamentoTipo',fld:'vCTIPOLANCAMENTOTIPO'},{av:'AV10cTipoLancamentoSnEstorno',fld:'vCTIPOLANCAMENTOSNESTORNO'},{av:'AV11cTipoLancamentoTpCalcAcr',fld:'vCTIPOLANCAMENTOTPCALCACR'}],[]];
   this.EvtParms["'GXM_NEXT'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cTipoLancamentoEmpresaid',fld:'vCTIPOLANCAMENTOEMPRESAID'},{av:'AV6cTipoLancamentoId',fld:'vCTIPOLANCAMENTOID'},{av:'AV7cTipoLancamentoDescricao',fld:'vCTIPOLANCAMENTODESCRICAO'},{av:'AV8cTipoLancamentoPagRec',fld:'vCTIPOLANCAMENTOPAGREC'},{av:'AV9cTipoLancamentoTipo',fld:'vCTIPOLANCAMENTOTIPO'},{av:'AV10cTipoLancamentoSnEstorno',fld:'vCTIPOLANCAMENTOSNESTORNO'},{av:'AV11cTipoLancamentoTpCalcAcr',fld:'vCTIPOLANCAMENTOTPCALCACR'}],[]];
   this.EvtParms["'GXM_LAST'"] = [[{av:'GRID1_nFirstRecordOnPage'},{av:'GRID1_nEOF'},{av:'subGrid1_Rows'},{av:'AV5cTipoLancamentoEmpresaid',fld:'vCTIPOLANCAMENTOEMPRESAID'},{av:'AV6cTipoLancamentoId',fld:'vCTIPOLANCAMENTOID'},{av:'AV7cTipoLancamentoDescricao',fld:'vCTIPOLANCAMENTODESCRICAO'},{av:'AV8cTipoLancamentoPagRec',fld:'vCTIPOLANCAMENTOPAGREC'},{av:'AV9cTipoLancamentoTipo',fld:'vCTIPOLANCAMENTOTIPO'},{av:'AV10cTipoLancamentoSnEstorno',fld:'vCTIPOLANCAMENTOSNESTORNO'},{av:'AV11cTipoLancamentoTpCalcAcr',fld:'vCTIPOLANCAMENTOTPCALCACR'}],[]];
   this.setVCMap("AV12pTipoLancamentoEmpresaid", "vPTIPOLANCAMENTOEMPRESAID", 0, "char");
   this.setVCMap("AV13pTipoLancamentoId", "vPTIPOLANCAMENTOID", 0, "int");
   Grid1Container.addRefreshingVar(this.GXValidFnc[13]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[19]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[25]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[31]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[37]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[43]);
   Grid1Container.addRefreshingVar(this.GXValidFnc[49]);
   this.InitStandaloneVars( );
});
gx.setParentObj(new gx03v0());
