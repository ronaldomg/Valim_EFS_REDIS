/**@preserve  GeneXus Java 10_3_12-110051 on December 12, 2020 10:57:55.48
*/
gx.evt.autoSkip = false;
gx.define('torcadorealizado', false, function () {
   this.ServerClass =  "torcadorealizado" ;
   this.PackageName =  "" ;
   this.setObjectType("trn");
   this.setOnAjaxSessionTimeout("Warn");
   this.hasEnterEvent = true;
   this.skipOnEnter = false;
   this.addKeyListener("20", "LAST");
   this.addKeyListener("19", "FIRST");
   this.addKeyListener("16", "SELECT");
   this.addKeyListener("13", "DELETE");
   this.addKeyListener("9", "GET");
   this.addKeyListener("2", "PROMPT");
   this.addKeyListener("8", "NEXT");
   this.addKeyListener("7", "PREVIOUS");
   this.addKeyListener("4", "CHECK");
   this.addKeyListener("5", "REFRESH");
   this.addKeyListener("12", "CANCEL");
   this.addKeyListener("1", "HELP");
   this.SetStandaloneVars=function()
   {
      this.Gx_mode=gx.fn.getControlValue("vMODE") ;
   };
   this.Valid_Orcadorealizadousuarioid=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORCADOREALIZADOUSUARIOID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Orcadorealizadoch1id=function()
   {
      try {
         var gxballoon = gx.util.balloon.getNew("ORCADOREALIZADOCH1ID");
         this.AnyError  = 0;

      }
      catch(e){}
      try {
         if (gxballoon == null) return true; return gxballoon.show();
      }
      catch(e){}
      return true ;
   }
   this.Valid_Orcadorealizadoch2id=function()
   {
      gx.ajax.validSrvEvt("dyncall","valid_Orcadorealizadoch2id",["gx.O.A4279OrcadoRealizadoUsuarioId", "gx.O.A4280OrcadoRealizadoCh1Id", "gx.O.A4281OrcadoRealizadoCh2Id", "gx.O.A4253OrcadoRealizadoCh1Des", "gx.O.A4254OrcadoRealizadoCh2Des", "gx.num.urlDecimal(gx.O.A4255OrcadoRealizadoPriValor1,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4256OrcadoRealizadoSegValor1,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4257OrcadoRealizadoPriValor2,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4258OrcadoRealizadoSegValor2,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4259OrcadoRealizadoPriValor3,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4260OrcadoRealizadoSegValor3,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4261OrcadoRealizadoPriValor4,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4262OrcadoRealizadoSegValor4,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4263OrcadoRealizadoPriValor5,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4264OrcadoRealizadoSegValor5,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4265OrcadoRealizadoPriValor6,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4266OrcadoRealizadoSegValor6,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4267OrcadoRealizadoPriValor7,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4268OrcadoRealizadoSegValor7,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4269OrcadoRealizadoPriValor8,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4270OrcadoRealizadoSegValor8,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4271OrcadoRealizadoPrivalor9,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4272OrcadoRealizadoSegValor9,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4273OrcadoRealizadoPriValor10,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4274OrcadoRealizadoSegValor10,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4275OrcadoRealizadoPriValor11,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4276OrcadoRealizadoSegValor11,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4277OrcadoRealizadoPriValor12,\'.\',\',\')", "gx.num.urlDecimal(gx.O.A4278OrcadoRealizadoSegValor12,\'.\',\',\')"],["A4253OrcadoRealizadoCh1Des", "A4254OrcadoRealizadoCh2Des", "A4255OrcadoRealizadoPriValor1", "A4256OrcadoRealizadoSegValor1", "A4257OrcadoRealizadoPriValor2", "A4258OrcadoRealizadoSegValor2", "A4259OrcadoRealizadoPriValor3", "A4260OrcadoRealizadoSegValor3", "A4261OrcadoRealizadoPriValor4", "A4262OrcadoRealizadoSegValor4", "A4263OrcadoRealizadoPriValor5", "A4264OrcadoRealizadoSegValor5", "A4265OrcadoRealizadoPriValor6", "A4266OrcadoRealizadoSegValor6", "A4267OrcadoRealizadoPriValor7", "A4268OrcadoRealizadoSegValor7", "A4269OrcadoRealizadoPriValor8", "A4270OrcadoRealizadoSegValor8", "A4271OrcadoRealizadoPrivalor9", "A4272OrcadoRealizadoSegValor9", "A4273OrcadoRealizadoPriValor10", "A4274OrcadoRealizadoSegValor10", "A4275OrcadoRealizadoPriValor11", "A4276OrcadoRealizadoSegValor11", "A4277OrcadoRealizadoPriValor12", "A4278OrcadoRealizadoSegValor12", "Gx_mode", "Z4279OrcadoRealizadoUsuarioId", "Z4280OrcadoRealizadoCh1Id", "Z4281OrcadoRealizadoCh2Id", "Z4253OrcadoRealizadoCh1Des", "Z4254OrcadoRealizadoCh2Des", "Z4255OrcadoRealizadoPriValor1", "Z4256OrcadoRealizadoSegValor1", "Z4257OrcadoRealizadoPriValor2", "Z4258OrcadoRealizadoSegValor2", "Z4259OrcadoRealizadoPriValor3", "Z4260OrcadoRealizadoSegValor3", "Z4261OrcadoRealizadoPriValor4", "Z4262OrcadoRealizadoSegValor4", "Z4263OrcadoRealizadoPriValor5", "Z4264OrcadoRealizadoSegValor5", "Z4265OrcadoRealizadoPriValor6", "Z4266OrcadoRealizadoSegValor6", "Z4267OrcadoRealizadoPriValor7", "Z4268OrcadoRealizadoSegValor7", "Z4269OrcadoRealizadoPriValor8", "Z4270OrcadoRealizadoSegValor8", "Z4271OrcadoRealizadoPrivalor9", "Z4272OrcadoRealizadoSegValor9", "Z4273OrcadoRealizadoPriValor10", "Z4274OrcadoRealizadoSegValor10", "Z4275OrcadoRealizadoPriValor11", "Z4276OrcadoRealizadoSegValor11", "Z4277OrcadoRealizadoPriValor12", "Z4278OrcadoRealizadoSegValor12", ["BTN_GET","Enabled"], ["BUTTON1","Enabled"]]);
      return true;
   }
   this.e117y433_client=function()
   {
      this.clearMessages();
      this.refreshOutputs([]);
   };
   this.e127y433_client=function()
   {
      this.executeServerEvent("ENTER", true, null, false, false);
   };
   this.e137y433_client=function()
   {
      this.executeServerEvent("CANCEL", true, null, false, false);
   };
   this.GXValidFnc = [];
   var GXValidFnc = this.GXValidFnc ;
   this.GXCtrlIds=[3,6,9,12,14,17,19,22,24,28,30,33,35,38,40,43,45,48,50,53,55,58,60,63,65,68,70,73,75,78,80,83,85,88,90,93,95,98,100,103,105,108,110,113,115,118,120,123,125,128,130,133,135,138,140,143,145,148,150,153,155,156,165,167];
   this.GXLastCtrlId =167;
   GXValidFnc[3]={fld:"TABLE1",grid:0};
   GXValidFnc[6]={fld:"TABLE2",grid:0};
   GXValidFnc[9]={fld:"TABLE3",grid:0};
   GXValidFnc[12]={fld:"TEXTBLOCK2", format:0,grid:0};
   GXValidFnc[14]={lvl:0,type:"char",len:12,dec:0,sign:false,pic:"@!",ro:0,grid:0,gxgrid:null,fnc:this.Valid_Orcadorealizadousuarioid,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOUSUARIOID",gxz:"Z4279OrcadoRealizadoUsuarioId",gxold:"O4279OrcadoRealizadoUsuarioId",gxvar:"A4279OrcadoRealizadoUsuarioId",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4279OrcadoRealizadoUsuarioId=Value},v2z:function(Value){gx.O.Z4279OrcadoRealizadoUsuarioId=Value},v2c:function(){gx.fn.setControlValue("ORCADOREALIZADOUSUARIOID",gx.O.A4279OrcadoRealizadoUsuarioId,0);if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4279OrcadoRealizadoUsuarioId=this.val()},val:function(){return gx.fn.getControlValue("ORCADOREALIZADOUSUARIOID")},nac:gx.falseFn};
   this.declareDomainHdlr( 14 , function() {
   });
   GXValidFnc[17]={fld:"TEXTBLOCK3", format:0,grid:0};
   GXValidFnc[19]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Orcadorealizadoch1id,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOCH1ID",gxz:"Z4280OrcadoRealizadoCh1Id",gxold:"O4280OrcadoRealizadoCh1Id",gxvar:"A4280OrcadoRealizadoCh1Id",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4280OrcadoRealizadoCh1Id=Value},v2z:function(Value){gx.O.Z4280OrcadoRealizadoCh1Id=Value},v2c:function(){gx.fn.setControlValue("ORCADOREALIZADOCH1ID",gx.O.A4280OrcadoRealizadoCh1Id,0)},c2v:function(){gx.O.A4280OrcadoRealizadoCh1Id=this.val()},val:function(){return gx.fn.getControlValue("ORCADOREALIZADOCH1ID")},nac:gx.falseFn};
   GXValidFnc[22]={fld:"TEXTBLOCK4", format:0,grid:0};
   GXValidFnc[24]={lvl:0,type:"svchar",len:30,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:this.Valid_Orcadorealizadoch2id,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOCH2ID",gxz:"Z4281OrcadoRealizadoCh2Id",gxold:"O4281OrcadoRealizadoCh2Id",gxvar:"A4281OrcadoRealizadoCh2Id",ucs:[],op:[155,150,145,140,135,130,125,120,115,110,105,100,95,90,85,80,75,70,65,60,55,50,45,40,35,30],ip:[155,150,145,140,135,130,125,120,115,110,105,100,95,90,85,80,75,70,65,60,55,50,45,40,35,30,24,19,14],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4281OrcadoRealizadoCh2Id=Value},v2z:function(Value){gx.O.Z4281OrcadoRealizadoCh2Id=Value},v2c:function(){gx.fn.setControlValue("ORCADOREALIZADOCH2ID",gx.O.A4281OrcadoRealizadoCh2Id,0)},c2v:function(){gx.O.A4281OrcadoRealizadoCh2Id=this.val()},val:function(){return gx.fn.getControlValue("ORCADOREALIZADOCH2ID")},nac:gx.falseFn};
   GXValidFnc[28]={fld:"TEXTBLOCK5", format:0,grid:0};
   GXValidFnc[30]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOCH1DES",gxz:"Z4253OrcadoRealizadoCh1Des",gxold:"O4253OrcadoRealizadoCh1Des",gxvar:"A4253OrcadoRealizadoCh1Des",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4253OrcadoRealizadoCh1Des=Value},v2z:function(Value){gx.O.Z4253OrcadoRealizadoCh1Des=Value},v2c:function(){gx.fn.setControlValue("ORCADOREALIZADOCH1DES",gx.O.A4253OrcadoRealizadoCh1Des,0)},c2v:function(){gx.O.A4253OrcadoRealizadoCh1Des=this.val()},val:function(){return gx.fn.getControlValue("ORCADOREALIZADOCH1DES")},nac:gx.falseFn};
   GXValidFnc[33]={fld:"TEXTBLOCK6", format:0,grid:0};
   GXValidFnc[35]={lvl:0,type:"svchar",len:60,dec:0,sign:false,ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOCH2DES",gxz:"Z4254OrcadoRealizadoCh2Des",gxold:"O4254OrcadoRealizadoCh2Des",gxvar:"A4254OrcadoRealizadoCh2Des",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4254OrcadoRealizadoCh2Des=Value},v2z:function(Value){gx.O.Z4254OrcadoRealizadoCh2Des=Value},v2c:function(){gx.fn.setControlValue("ORCADOREALIZADOCH2DES",gx.O.A4254OrcadoRealizadoCh2Des,0)},c2v:function(){gx.O.A4254OrcadoRealizadoCh2Des=this.val()},val:function(){return gx.fn.getControlValue("ORCADOREALIZADOCH2DES")},nac:gx.falseFn};
   GXValidFnc[38]={fld:"TEXTBLOCK7", format:0,grid:0};
   GXValidFnc[40]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOPRIVALOR1",gxz:"Z4255OrcadoRealizadoPriValor1",gxold:"O4255OrcadoRealizadoPriValor1",gxvar:"A4255OrcadoRealizadoPriValor1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4255OrcadoRealizadoPriValor1=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4255OrcadoRealizadoPriValor1=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOPRIVALOR1",gx.O.A4255OrcadoRealizadoPriValor1,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4255OrcadoRealizadoPriValor1=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOPRIVALOR1",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 40 , function() {
   });
   GXValidFnc[43]={fld:"TEXTBLOCK8", format:0,grid:0};
   GXValidFnc[45]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOSEGVALOR1",gxz:"Z4256OrcadoRealizadoSegValor1",gxold:"O4256OrcadoRealizadoSegValor1",gxvar:"A4256OrcadoRealizadoSegValor1",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4256OrcadoRealizadoSegValor1=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4256OrcadoRealizadoSegValor1=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOSEGVALOR1",gx.O.A4256OrcadoRealizadoSegValor1,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4256OrcadoRealizadoSegValor1=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOSEGVALOR1",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 45 , function() {
   });
   GXValidFnc[48]={fld:"TEXTBLOCK9", format:0,grid:0};
   GXValidFnc[50]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOPRIVALOR2",gxz:"Z4257OrcadoRealizadoPriValor2",gxold:"O4257OrcadoRealizadoPriValor2",gxvar:"A4257OrcadoRealizadoPriValor2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4257OrcadoRealizadoPriValor2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4257OrcadoRealizadoPriValor2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOPRIVALOR2",gx.O.A4257OrcadoRealizadoPriValor2,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4257OrcadoRealizadoPriValor2=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOPRIVALOR2",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 50 , function() {
   });
   GXValidFnc[53]={fld:"TEXTBLOCK10", format:0,grid:0};
   GXValidFnc[55]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOSEGVALOR2",gxz:"Z4258OrcadoRealizadoSegValor2",gxold:"O4258OrcadoRealizadoSegValor2",gxvar:"A4258OrcadoRealizadoSegValor2",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4258OrcadoRealizadoSegValor2=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4258OrcadoRealizadoSegValor2=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOSEGVALOR2",gx.O.A4258OrcadoRealizadoSegValor2,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4258OrcadoRealizadoSegValor2=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOSEGVALOR2",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 55 , function() {
   });
   GXValidFnc[58]={fld:"TEXTBLOCK11", format:0,grid:0};
   GXValidFnc[60]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOPRIVALOR3",gxz:"Z4259OrcadoRealizadoPriValor3",gxold:"O4259OrcadoRealizadoPriValor3",gxvar:"A4259OrcadoRealizadoPriValor3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4259OrcadoRealizadoPriValor3=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4259OrcadoRealizadoPriValor3=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOPRIVALOR3",gx.O.A4259OrcadoRealizadoPriValor3,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4259OrcadoRealizadoPriValor3=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOPRIVALOR3",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 60 , function() {
   });
   GXValidFnc[63]={fld:"TEXTBLOCK12", format:0,grid:0};
   GXValidFnc[65]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOSEGVALOR3",gxz:"Z4260OrcadoRealizadoSegValor3",gxold:"O4260OrcadoRealizadoSegValor3",gxvar:"A4260OrcadoRealizadoSegValor3",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4260OrcadoRealizadoSegValor3=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4260OrcadoRealizadoSegValor3=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOSEGVALOR3",gx.O.A4260OrcadoRealizadoSegValor3,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4260OrcadoRealizadoSegValor3=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOSEGVALOR3",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 65 , function() {
   });
   GXValidFnc[68]={fld:"TEXTBLOCK13", format:0,grid:0};
   GXValidFnc[70]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOPRIVALOR4",gxz:"Z4261OrcadoRealizadoPriValor4",gxold:"O4261OrcadoRealizadoPriValor4",gxvar:"A4261OrcadoRealizadoPriValor4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4261OrcadoRealizadoPriValor4=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4261OrcadoRealizadoPriValor4=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOPRIVALOR4",gx.O.A4261OrcadoRealizadoPriValor4,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4261OrcadoRealizadoPriValor4=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOPRIVALOR4",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 70 , function() {
   });
   GXValidFnc[73]={fld:"TEXTBLOCK14", format:0,grid:0};
   GXValidFnc[75]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOSEGVALOR4",gxz:"Z4262OrcadoRealizadoSegValor4",gxold:"O4262OrcadoRealizadoSegValor4",gxvar:"A4262OrcadoRealizadoSegValor4",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4262OrcadoRealizadoSegValor4=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4262OrcadoRealizadoSegValor4=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOSEGVALOR4",gx.O.A4262OrcadoRealizadoSegValor4,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4262OrcadoRealizadoSegValor4=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOSEGVALOR4",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 75 , function() {
   });
   GXValidFnc[78]={fld:"TEXTBLOCK15", format:0,grid:0};
   GXValidFnc[80]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOPRIVALOR5",gxz:"Z4263OrcadoRealizadoPriValor5",gxold:"O4263OrcadoRealizadoPriValor5",gxvar:"A4263OrcadoRealizadoPriValor5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4263OrcadoRealizadoPriValor5=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4263OrcadoRealizadoPriValor5=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOPRIVALOR5",gx.O.A4263OrcadoRealizadoPriValor5,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4263OrcadoRealizadoPriValor5=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOPRIVALOR5",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 80 , function() {
   });
   GXValidFnc[83]={fld:"TEXTBLOCK16", format:0,grid:0};
   GXValidFnc[85]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOSEGVALOR5",gxz:"Z4264OrcadoRealizadoSegValor5",gxold:"O4264OrcadoRealizadoSegValor5",gxvar:"A4264OrcadoRealizadoSegValor5",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4264OrcadoRealizadoSegValor5=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4264OrcadoRealizadoSegValor5=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOSEGVALOR5",gx.O.A4264OrcadoRealizadoSegValor5,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4264OrcadoRealizadoSegValor5=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOSEGVALOR5",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 85 , function() {
   });
   GXValidFnc[88]={fld:"TEXTBLOCK17", format:0,grid:0};
   GXValidFnc[90]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOPRIVALOR6",gxz:"Z4265OrcadoRealizadoPriValor6",gxold:"O4265OrcadoRealizadoPriValor6",gxvar:"A4265OrcadoRealizadoPriValor6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4265OrcadoRealizadoPriValor6=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4265OrcadoRealizadoPriValor6=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOPRIVALOR6",gx.O.A4265OrcadoRealizadoPriValor6,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4265OrcadoRealizadoPriValor6=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOPRIVALOR6",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 90 , function() {
   });
   GXValidFnc[93]={fld:"TEXTBLOCK18", format:0,grid:0};
   GXValidFnc[95]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOSEGVALOR6",gxz:"Z4266OrcadoRealizadoSegValor6",gxold:"O4266OrcadoRealizadoSegValor6",gxvar:"A4266OrcadoRealizadoSegValor6",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4266OrcadoRealizadoSegValor6=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4266OrcadoRealizadoSegValor6=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOSEGVALOR6",gx.O.A4266OrcadoRealizadoSegValor6,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4266OrcadoRealizadoSegValor6=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOSEGVALOR6",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 95 , function() {
   });
   GXValidFnc[98]={fld:"TEXTBLOCK19", format:0,grid:0};
   GXValidFnc[100]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOPRIVALOR7",gxz:"Z4267OrcadoRealizadoPriValor7",gxold:"O4267OrcadoRealizadoPriValor7",gxvar:"A4267OrcadoRealizadoPriValor7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4267OrcadoRealizadoPriValor7=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4267OrcadoRealizadoPriValor7=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOPRIVALOR7",gx.O.A4267OrcadoRealizadoPriValor7,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4267OrcadoRealizadoPriValor7=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOPRIVALOR7",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 100 , function() {
   });
   GXValidFnc[103]={fld:"TEXTBLOCK20", format:0,grid:0};
   GXValidFnc[105]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOSEGVALOR7",gxz:"Z4268OrcadoRealizadoSegValor7",gxold:"O4268OrcadoRealizadoSegValor7",gxvar:"A4268OrcadoRealizadoSegValor7",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4268OrcadoRealizadoSegValor7=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4268OrcadoRealizadoSegValor7=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOSEGVALOR7",gx.O.A4268OrcadoRealizadoSegValor7,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4268OrcadoRealizadoSegValor7=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOSEGVALOR7",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 105 , function() {
   });
   GXValidFnc[108]={fld:"TEXTBLOCK21", format:0,grid:0};
   GXValidFnc[110]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOPRIVALOR8",gxz:"Z4269OrcadoRealizadoPriValor8",gxold:"O4269OrcadoRealizadoPriValor8",gxvar:"A4269OrcadoRealizadoPriValor8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4269OrcadoRealizadoPriValor8=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4269OrcadoRealizadoPriValor8=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOPRIVALOR8",gx.O.A4269OrcadoRealizadoPriValor8,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4269OrcadoRealizadoPriValor8=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOPRIVALOR8",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 110 , function() {
   });
   GXValidFnc[113]={fld:"TEXTBLOCK22", format:0,grid:0};
   GXValidFnc[115]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOSEGVALOR8",gxz:"Z4270OrcadoRealizadoSegValor8",gxold:"O4270OrcadoRealizadoSegValor8",gxvar:"A4270OrcadoRealizadoSegValor8",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4270OrcadoRealizadoSegValor8=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4270OrcadoRealizadoSegValor8=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOSEGVALOR8",gx.O.A4270OrcadoRealizadoSegValor8,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4270OrcadoRealizadoSegValor8=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOSEGVALOR8",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 115 , function() {
   });
   GXValidFnc[118]={fld:"TEXTBLOCK23", format:0,grid:0};
   GXValidFnc[120]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOPRIVALOR9",gxz:"Z4271OrcadoRealizadoPrivalor9",gxold:"O4271OrcadoRealizadoPrivalor9",gxvar:"A4271OrcadoRealizadoPrivalor9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4271OrcadoRealizadoPrivalor9=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4271OrcadoRealizadoPrivalor9=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOPRIVALOR9",gx.O.A4271OrcadoRealizadoPrivalor9,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4271OrcadoRealizadoPrivalor9=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOPRIVALOR9",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 120 , function() {
   });
   GXValidFnc[123]={fld:"TEXTBLOCK24", format:0,grid:0};
   GXValidFnc[125]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOSEGVALOR9",gxz:"Z4272OrcadoRealizadoSegValor9",gxold:"O4272OrcadoRealizadoSegValor9",gxvar:"A4272OrcadoRealizadoSegValor9",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4272OrcadoRealizadoSegValor9=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4272OrcadoRealizadoSegValor9=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOSEGVALOR9",gx.O.A4272OrcadoRealizadoSegValor9,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4272OrcadoRealizadoSegValor9=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOSEGVALOR9",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 125 , function() {
   });
   GXValidFnc[128]={fld:"TEXTBLOCK25", format:0,grid:0};
   GXValidFnc[130]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOPRIVALOR10",gxz:"Z4273OrcadoRealizadoPriValor10",gxold:"O4273OrcadoRealizadoPriValor10",gxvar:"A4273OrcadoRealizadoPriValor10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4273OrcadoRealizadoPriValor10=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4273OrcadoRealizadoPriValor10=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOPRIVALOR10",gx.O.A4273OrcadoRealizadoPriValor10,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4273OrcadoRealizadoPriValor10=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOPRIVALOR10",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 130 , function() {
   });
   GXValidFnc[133]={fld:"TEXTBLOCK26", format:0,grid:0};
   GXValidFnc[135]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOSEGVALOR10",gxz:"Z4274OrcadoRealizadoSegValor10",gxold:"O4274OrcadoRealizadoSegValor10",gxvar:"A4274OrcadoRealizadoSegValor10",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4274OrcadoRealizadoSegValor10=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4274OrcadoRealizadoSegValor10=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOSEGVALOR10",gx.O.A4274OrcadoRealizadoSegValor10,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4274OrcadoRealizadoSegValor10=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOSEGVALOR10",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 135 , function() {
   });
   GXValidFnc[138]={fld:"TEXTBLOCK27", format:0,grid:0};
   GXValidFnc[140]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOPRIVALOR11",gxz:"Z4275OrcadoRealizadoPriValor11",gxold:"O4275OrcadoRealizadoPriValor11",gxvar:"A4275OrcadoRealizadoPriValor11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4275OrcadoRealizadoPriValor11=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4275OrcadoRealizadoPriValor11=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOPRIVALOR11",gx.O.A4275OrcadoRealizadoPriValor11,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4275OrcadoRealizadoPriValor11=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOPRIVALOR11",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 140 , function() {
   });
   GXValidFnc[143]={fld:"TEXTBLOCK28", format:0,grid:0};
   GXValidFnc[145]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOSEGVALOR11",gxz:"Z4276OrcadoRealizadoSegValor11",gxold:"O4276OrcadoRealizadoSegValor11",gxvar:"A4276OrcadoRealizadoSegValor11",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4276OrcadoRealizadoSegValor11=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4276OrcadoRealizadoSegValor11=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOSEGVALOR11",gx.O.A4276OrcadoRealizadoSegValor11,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4276OrcadoRealizadoSegValor11=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOSEGVALOR11",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 145 , function() {
   });
   GXValidFnc[148]={fld:"TEXTBLOCK29", format:0,grid:0};
   GXValidFnc[150]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOPRIVALOR12",gxz:"Z4277OrcadoRealizadoPriValor12",gxold:"O4277OrcadoRealizadoPriValor12",gxvar:"A4277OrcadoRealizadoPriValor12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4277OrcadoRealizadoPriValor12=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4277OrcadoRealizadoPriValor12=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOPRIVALOR12",gx.O.A4277OrcadoRealizadoPriValor12,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4277OrcadoRealizadoPriValor12=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOPRIVALOR12",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 150 , function() {
   });
   GXValidFnc[153]={fld:"TEXTBLOCK30", format:0,grid:0};
   GXValidFnc[155]={lvl:0,type:"decimal",len:18,dec:2,sign:true,pic:"ZZZ,ZZZ,ZZZ,ZZZ,ZZ9.99",ro:0,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"ORCADOREALIZADOSEGVALOR12",gxz:"Z4278OrcadoRealizadoSegValor12",gxold:"O4278OrcadoRealizadoSegValor12",gxvar:"A4278OrcadoRealizadoSegValor12",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.A4278OrcadoRealizadoSegValor12=gx.fn.toDecimalValue(Value,',','.')},v2z:function(Value){gx.O.Z4278OrcadoRealizadoSegValor12=gx.fn.toDecimalValue(Value,'.',',')},v2c:function(){gx.fn.setDecimalValue("ORCADOREALIZADOSEGVALOR12",gx.O.A4278OrcadoRealizadoSegValor12,2,',');if (typeof(this.dom_hdl) == 'function') this.dom_hdl.call(gx.O);},c2v:function(){gx.O.A4278OrcadoRealizadoSegValor12=this.val()},val:function(){return gx.fn.getDecimalValue("ORCADOREALIZADOSEGVALOR12",'.',',')},nac:gx.falseFn};
   this.declareDomainHdlr( 155 , function() {
   });
   GXValidFnc[156]={fld:"TEXTBLOCK1", format:0,grid:0};
   GXValidFnc[165]={lvl:0,type:"int",len:8,dec:0,sign:false,pic:"ZZZZZZZ9",ro:1,grid:0,gxgrid:null,fnc:null,isvalid:null,rgrid:[],fld:"vACESSOSISTEMASEQUENCIA",gxz:"ZV17AcessoSistemaSequencia",gxold:"OV17AcessoSistemaSequencia",gxvar:"AV17AcessoSistemaSequencia",ucs:[],op:[],ip:[],nacdep:[],ctrltype:"edit",v2v:function(Value){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(Value)},v2z:function(Value){gx.O.ZV17AcessoSistemaSequencia=gx.num.intval(Value)},v2c:function(){gx.fn.setControlValue("vACESSOSISTEMASEQUENCIA",gx.O.AV17AcessoSistemaSequencia,0)},c2v:function(){gx.O.AV17AcessoSistemaSequencia=gx.num.intval(this.val())},val:function(){return gx.fn.getIntegerValue("vACESSOSISTEMASEQUENCIA",'.')},nac:gx.falseFn};
   GXValidFnc[167]={fld:"BTNHELP",grid:0};
   this.A4279OrcadoRealizadoUsuarioId = "" ;
   this.Z4279OrcadoRealizadoUsuarioId = "" ;
   this.O4279OrcadoRealizadoUsuarioId = "" ;
   this.A4280OrcadoRealizadoCh1Id = "" ;
   this.Z4280OrcadoRealizadoCh1Id = "" ;
   this.O4280OrcadoRealizadoCh1Id = "" ;
   this.A4281OrcadoRealizadoCh2Id = "" ;
   this.Z4281OrcadoRealizadoCh2Id = "" ;
   this.O4281OrcadoRealizadoCh2Id = "" ;
   this.A4253OrcadoRealizadoCh1Des = "" ;
   this.Z4253OrcadoRealizadoCh1Des = "" ;
   this.O4253OrcadoRealizadoCh1Des = "" ;
   this.A4254OrcadoRealizadoCh2Des = "" ;
   this.Z4254OrcadoRealizadoCh2Des = "" ;
   this.O4254OrcadoRealizadoCh2Des = "" ;
   this.A4255OrcadoRealizadoPriValor1 = 0 ;
   this.Z4255OrcadoRealizadoPriValor1 = 0 ;
   this.O4255OrcadoRealizadoPriValor1 = 0 ;
   this.A4256OrcadoRealizadoSegValor1 = 0 ;
   this.Z4256OrcadoRealizadoSegValor1 = 0 ;
   this.O4256OrcadoRealizadoSegValor1 = 0 ;
   this.A4257OrcadoRealizadoPriValor2 = 0 ;
   this.Z4257OrcadoRealizadoPriValor2 = 0 ;
   this.O4257OrcadoRealizadoPriValor2 = 0 ;
   this.A4258OrcadoRealizadoSegValor2 = 0 ;
   this.Z4258OrcadoRealizadoSegValor2 = 0 ;
   this.O4258OrcadoRealizadoSegValor2 = 0 ;
   this.A4259OrcadoRealizadoPriValor3 = 0 ;
   this.Z4259OrcadoRealizadoPriValor3 = 0 ;
   this.O4259OrcadoRealizadoPriValor3 = 0 ;
   this.A4260OrcadoRealizadoSegValor3 = 0 ;
   this.Z4260OrcadoRealizadoSegValor3 = 0 ;
   this.O4260OrcadoRealizadoSegValor3 = 0 ;
   this.A4261OrcadoRealizadoPriValor4 = 0 ;
   this.Z4261OrcadoRealizadoPriValor4 = 0 ;
   this.O4261OrcadoRealizadoPriValor4 = 0 ;
   this.A4262OrcadoRealizadoSegValor4 = 0 ;
   this.Z4262OrcadoRealizadoSegValor4 = 0 ;
   this.O4262OrcadoRealizadoSegValor4 = 0 ;
   this.A4263OrcadoRealizadoPriValor5 = 0 ;
   this.Z4263OrcadoRealizadoPriValor5 = 0 ;
   this.O4263OrcadoRealizadoPriValor5 = 0 ;
   this.A4264OrcadoRealizadoSegValor5 = 0 ;
   this.Z4264OrcadoRealizadoSegValor5 = 0 ;
   this.O4264OrcadoRealizadoSegValor5 = 0 ;
   this.A4265OrcadoRealizadoPriValor6 = 0 ;
   this.Z4265OrcadoRealizadoPriValor6 = 0 ;
   this.O4265OrcadoRealizadoPriValor6 = 0 ;
   this.A4266OrcadoRealizadoSegValor6 = 0 ;
   this.Z4266OrcadoRealizadoSegValor6 = 0 ;
   this.O4266OrcadoRealizadoSegValor6 = 0 ;
   this.A4267OrcadoRealizadoPriValor7 = 0 ;
   this.Z4267OrcadoRealizadoPriValor7 = 0 ;
   this.O4267OrcadoRealizadoPriValor7 = 0 ;
   this.A4268OrcadoRealizadoSegValor7 = 0 ;
   this.Z4268OrcadoRealizadoSegValor7 = 0 ;
   this.O4268OrcadoRealizadoSegValor7 = 0 ;
   this.A4269OrcadoRealizadoPriValor8 = 0 ;
   this.Z4269OrcadoRealizadoPriValor8 = 0 ;
   this.O4269OrcadoRealizadoPriValor8 = 0 ;
   this.A4270OrcadoRealizadoSegValor8 = 0 ;
   this.Z4270OrcadoRealizadoSegValor8 = 0 ;
   this.O4270OrcadoRealizadoSegValor8 = 0 ;
   this.A4271OrcadoRealizadoPrivalor9 = 0 ;
   this.Z4271OrcadoRealizadoPrivalor9 = 0 ;
   this.O4271OrcadoRealizadoPrivalor9 = 0 ;
   this.A4272OrcadoRealizadoSegValor9 = 0 ;
   this.Z4272OrcadoRealizadoSegValor9 = 0 ;
   this.O4272OrcadoRealizadoSegValor9 = 0 ;
   this.A4273OrcadoRealizadoPriValor10 = 0 ;
   this.Z4273OrcadoRealizadoPriValor10 = 0 ;
   this.O4273OrcadoRealizadoPriValor10 = 0 ;
   this.A4274OrcadoRealizadoSegValor10 = 0 ;
   this.Z4274OrcadoRealizadoSegValor10 = 0 ;
   this.O4274OrcadoRealizadoSegValor10 = 0 ;
   this.A4275OrcadoRealizadoPriValor11 = 0 ;
   this.Z4275OrcadoRealizadoPriValor11 = 0 ;
   this.O4275OrcadoRealizadoPriValor11 = 0 ;
   this.A4276OrcadoRealizadoSegValor11 = 0 ;
   this.Z4276OrcadoRealizadoSegValor11 = 0 ;
   this.O4276OrcadoRealizadoSegValor11 = 0 ;
   this.A4277OrcadoRealizadoPriValor12 = 0 ;
   this.Z4277OrcadoRealizadoPriValor12 = 0 ;
   this.O4277OrcadoRealizadoPriValor12 = 0 ;
   this.A4278OrcadoRealizadoSegValor12 = 0 ;
   this.Z4278OrcadoRealizadoSegValor12 = 0 ;
   this.O4278OrcadoRealizadoSegValor12 = 0 ;
   this.AV17AcessoSistemaSequencia = 0 ;
   this.ZV17AcessoSistemaSequencia = 0 ;
   this.OV17AcessoSistemaSequencia = 0 ;
   this.AV8Logon = {} ;
   this.A4279OrcadoRealizadoUsuarioId = "" ;
   this.A4280OrcadoRealizadoCh1Id = "" ;
   this.A4281OrcadoRealizadoCh2Id = "" ;
   this.A4253OrcadoRealizadoCh1Des = "" ;
   this.A4254OrcadoRealizadoCh2Des = "" ;
   this.A4255OrcadoRealizadoPriValor1 = 0 ;
   this.A4256OrcadoRealizadoSegValor1 = 0 ;
   this.A4257OrcadoRealizadoPriValor2 = 0 ;
   this.A4258OrcadoRealizadoSegValor2 = 0 ;
   this.A4259OrcadoRealizadoPriValor3 = 0 ;
   this.A4260OrcadoRealizadoSegValor3 = 0 ;
   this.A4261OrcadoRealizadoPriValor4 = 0 ;
   this.A4262OrcadoRealizadoSegValor4 = 0 ;
   this.A4263OrcadoRealizadoPriValor5 = 0 ;
   this.A4264OrcadoRealizadoSegValor5 = 0 ;
   this.A4265OrcadoRealizadoPriValor6 = 0 ;
   this.A4266OrcadoRealizadoSegValor6 = 0 ;
   this.A4267OrcadoRealizadoPriValor7 = 0 ;
   this.A4268OrcadoRealizadoSegValor7 = 0 ;
   this.A4269OrcadoRealizadoPriValor8 = 0 ;
   this.A4270OrcadoRealizadoSegValor8 = 0 ;
   this.A4271OrcadoRealizadoPrivalor9 = 0 ;
   this.A4272OrcadoRealizadoSegValor9 = 0 ;
   this.A4273OrcadoRealizadoPriValor10 = 0 ;
   this.A4274OrcadoRealizadoSegValor10 = 0 ;
   this.A4275OrcadoRealizadoPriValor11 = 0 ;
   this.A4276OrcadoRealizadoSegValor11 = 0 ;
   this.A4277OrcadoRealizadoPriValor12 = 0 ;
   this.A4278OrcadoRealizadoSegValor12 = 0 ;
   this.Events = {"e127y433_client": ["ENTER", true] ,"e137y433_client": ["CANCEL", true] ,"e117y433_client": ["'FECHAR'", false]};
   this.EvtParms["ENTER"] = [[{postForm:true}],[]];
   this.EvtParms["REFRESH"] = [[],[]];
   this.EvtParms["'FECHAR'"] = [[],[]];
   this.EnterCtrl = ["BUTTON1"];
   this.setVCMap("Gx_mode", "vMODE", 0, "char");
   this.InitStandaloneVars( );
});
gx.setParentObj(new torcadorealizado());
